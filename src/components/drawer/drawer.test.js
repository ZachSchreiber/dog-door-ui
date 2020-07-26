import React from "react";
import { mount } from "enzyme/build";
import componentBuilder from "../component-builder";
import { INTERACTIONS_AFFORDANCE } from "./constants";
import Drawer from "./drawer";

const initiallyFocusedId = "initially-focused";
const firstFocusableId = "focusable-child-1";
const secondFocusableId = "focusable-child-2";
const lastFocusableId = "focusable-child-3";
const theOnlyFocusableId = "the-only-focusable-child";

class InitiallyFocusedButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.current.focus();
  }

  render() {
    return (
      <button ref={this.ref} id={this.props.id}>
        Some button
      </button>
    );
  }
}

const defaultProps = {
  isOpen: false,
  isGlobal: true,
  children: (
    <div>
      <a href="/" id={firstFocusableId}>
        link1text
      </a>
      <a href="/" id={secondFocusableId}>
        link1text
      </a>
      <a href="/" id={lastFocusableId}>
        link1text
      </a>
    </div>
  ),
  onClose: jest.fn(),
  titleElementId: "title-id",
  setFocusOnOpen: true
};

const buildComponent = componentBuilder(Drawer, defaultProps, mount);

const buildButton = () => {
  return mount(<InitiallyFocusedButton id={initiallyFocusedId} />);
};

jest.useFakeTimers();

beforeAll(() => {
  jest.spyOn(document, "querySelector");
});

describe("Components: Drawer", () => {
  let component;
  let initiallyFocusedElement;

  beforeEach(() => {
    initiallyFocusedElement = buildButton();
    component = buildComponent();
  });

  afterEach(() => {
    component.unmount();
    initiallyFocusedElement.unmount();
    defaultProps.onClose.mockClear();
  });

  it("should render without errors", () => {
    expect(component).toHaveLength(1);
  });

  describe("Drawer element", () => {
    let drawer;

    beforeEach(() => {
      drawer = component.find(`.${Drawer.drawerClassName}`);
    });

    it("should be rendered", () => {
      expect(drawer).toHaveLength(1);
    });

    it("should have expected accessibility props", () => {
      expect(drawer.props()).toMatchObject({
        role: "dialog",
        "aria-labelledby": defaultProps.titleElementId,
        "aria-modal": "true",
        "aria-hidden": !defaultProps.isOpen,
        tabIndex: -1
      });
    });

    it("should NOT add disable animation class by default", () => {
      expect(component.find(".drawer--disable-animations")).toHaveLength(0);
    });

    it("should add disable animation class when disableAnimations class is set to true", () => {
      component.setProps({ disableAnimations: true });
      expect(component.find(".drawer--disable-animations")).toHaveLength(1);
    });
  });

  describe("handleOpen method", () => {
    it("should be called, when panel opening", () => {
      jest.spyOn(component.instance(), "handleOpen");
      component.setProps({ isOpen: true });

      expect(component.instance().handleOpen).toBeCalled();
    });

    it("should add listener for keyDown event", () => {
      jest.spyOn(document, "addEventListener");
      component.instance().handleOpen();

      expect(document.addEventListener).toBeCalledWith(
        "keydown",
        component.instance().handleKeyDown
      );
    });

    it("should set initiallyFocusedElement to the currently focused element", () => {
      component.instance().initiallyFocusedElement = null;
      component.instance().handleOpen();
      jest.runAllTimers();

      expect(component.instance().initiallyFocusedElement.id).toBe(
        initiallyFocusedId
      );
    });

    it("should set focus on the first focusable child WHEN 'setFocusOnOpen' prop is set to true", () => {
      component.setProps({ setFocusOnOpen: true });
      component.instance().handleOpen();
      jest.runAllTimers();

      expect(document.activeElement.id).toBe(firstFocusableId);
    });

    it("should NOT manage focus WHEN 'setFocusOnOpen' prop is set to false", () => {
      component.setProps({ setFocusOnOpen: false });
      component.instance().handleOpen();
      jest.runAllTimers();

      expect(document.activeElement.id).toBe(initiallyFocusedId);
    });
  });

  describe("handleClose method", () => {
    it("should be called, when panel closing", () => {
      jest.spyOn(component.instance(), "handleClose");
      component.setProps({ isOpen: true });
      component.setProps({ isOpen: false });

      expect(component.instance().handleClose).toBeCalledWith(true);
    });

    it("should be called with proper arguments, when ESC pressed", () => {
      jest.spyOn(component.instance(), "handleClose");
      component.setProps({ isOpen: true });
      const event = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(event);

      expect(component.instance().handleClose).toBeCalledWith(
        false,
        INTERACTIONS_AFFORDANCE.ESC
      );
    });

    it("should remove listener for keyDown event", () => {
      jest.spyOn(document, "removeEventListener");
      component.instance().handleClose();

      expect(document.removeEventListener).toBeCalledWith(
        "keydown",
        component.instance().handleKeyDown
      );
    });

    it("should NOT manage focus after closing WHEN 'setFocusOnClose' prop is set to false", () => {
      component.setProps({ setFocusOnClose: false, isOpen: true });
      jest.runAllTimers();
      component.instance().handleClose();

      expect(document.querySelector).not.toBeCalled();
      expect(document.activeElement.id).not.toBe(initiallyFocusedId);
    });

    it("should return focus to initially active element after closing WHEN 'returnFocusSelector' prop is NOT passed", () => {
      component.setProps({ setFocusOnClose: true, isOpen: true });
      jest.runAllTimers();
      component.instance().handleClose();

      expect(document.activeElement.id).toBe(initiallyFocusedId);
    });

    it("should set focus to the element matching 'returnFocusSelector' after closing WHEN 'returnFocusSelector' prop is passed", () => {
      const returnFocusSelector = "#target-element";
      component.setProps({
        setFocusOnClose: true,
        isOpen: true,
        returnFocusSelector
      });
      jest.runAllTimers();
      const mockedElement = { focus: jest.fn() };
      document.querySelector.mockReturnValueOnce(mockedElement);
      component.instance().handleClose();

      expect(document.querySelector).toBeCalledWith(returnFocusSelector);
      expect(mockedElement.focus).toBeCalled();
    });

    it("should call 'onClose' prop with affordance argument, when called with 'propsChanged' = false", () => {
      const affordance = "SOME_AFFORDANCE";
      component.instance().handleClose(false, affordance);

      expect(defaultProps.onClose).toBeCalledWith(affordance);
    });

    it("should NOT call onClose, when called with TRUE argument", () => {
      component.instance().handleClose(true);

      expect(defaultProps.onClose).not.toBeCalled();
    });
  });

  describe("Overlay element", () => {
    it("should be rendered, when showOverlay prop is set to true", () => {
      component.setProps({ showOverlay: true });
      const overlay = component.find(`.${Drawer.drawerOverlayClassName}`);

      expect(overlay).toHaveLength(1);
    });

    it("should NOT be rendered, when showOverlay prop is set to FALSE", () => {
      component.setProps({ showOverlay: false });
      const overlay = component.find(`.${Drawer.drawerOverlayClassName}`);

      expect(overlay).toHaveLength(0);
    });

    it("should call 'handleClose' method with proper arguments, when clicked", () => {
      component.setProps({ isOpen: true, showOverlay: true });
      const overlay = component.find(`.${Drawer.drawerOverlayClassName}`);
      jest.spyOn(component.instance(), "handleClose");
      overlay.simulate("click");

      expect(component.instance().handleClose).toBeCalledWith(
        false,
        INTERACTIONS_AFFORDANCE.OVERLAY
      );
    });

    it("should NOT add disable animation class by default", () => {
      expect(
        component.find(".drawer-overlay--disable-animations")
      ).toHaveLength(0);
    });

    it("should add disable animation class when disableAnimations class is set to true", () => {
      component.setProps({ disableAnimations: true });
      expect(
        component.find(".drawer-overlay--disable-animations")
      ).toHaveLength(1);
    });
  });

  it("should render PORTAL when isGlobal is defaulted to TRUE", () => {
    const portalComponent = component.find("Portal");
    expect(portalComponent.exists()).toBeTruthy();
  });

  it("should NOT render PORTAL when isGlobal prop is FALSE", () => {
    component.setProps({ isGlobal: false });
    const portalComponent = component.find("Portal");
    expect(portalComponent.exists()).toBeFalsy();
  });

  describe("while tabbing through elements", () => {
    let focusableElements;
    let firstFocusable;
    let lastFocusable;

    beforeEach(() => {
      focusableElements = document.querySelectorAll("[href]");
      firstFocusable = focusableElements[0];
      lastFocusable = focusableElements[focusableElements.length - 1];
    });

    it("should not manage focus WHEN focus is on the last tabbable AND 'isGlobal' is false", () => {
      component.setProps({ isGlobal: false });
      lastFocusable.focus();
      const event = new KeyboardEvent("keydown", { key: "Tab" });
      component.instance().handleKeyDown(event);

      expect(document.activeElement.id).not.toBe(firstFocusable.id);
    });

    it("if focus is on the last tabbable element inside the dialog, Tab should move focus to the first tabbable element inside the dialog", () => {
      lastFocusable.focus();
      const event = new KeyboardEvent("keydown", { key: "Tab" });
      component.instance().handleKeyDown(event);

      expect(document.activeElement.id).toBe(firstFocusable.id);
    });

    it("if focus is on the first tabbable element inside the dialog, Shift+Tab should move focus to the last tabbable element inside the dialog", () => {
      firstFocusable.focus();
      const event = new KeyboardEvent("keydown", {
        key: "Tab",
        shiftKey: true
      });
      component.instance().handleKeyDown(event);

      expect(document.activeElement.id).toBe(lastFocusable.id);
    });

    it("focus should remain inside Drawer when there is only one tabbable element in it", () => {
      const propWithOneChild = {
        isOpen: false,
        children: (
          <a href="/" id={theOnlyFocusableId}>
            link1text
          </a>
        ),
        titleElementId: "title-id"
      };
      const buildComponent = componentBuilder(Drawer, propWithOneChild, mount);
      component = buildComponent();
      const focusableElements = document.querySelectorAll("[href]");
      const theOnlyFocusable = focusableElements[0];
      theOnlyFocusable.focus();
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab"
      });
      component.instance().handleKeyDown(tabEvent);

      expect(document.activeElement.id).toBe(theOnlyFocusable.id);

      const shiftTabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        shiftKey: true
      });
      component.instance().handleKeyDown(shiftTabEvent);

      expect(document.activeElement.id).toBe(theOnlyFocusable.id);
    });
  });
});
