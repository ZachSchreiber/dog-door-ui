import React from "react";
import cn from "classnames";
import { INTERACTIONS_AFFORDANCE } from "./constants";
import "./drawer.scss";



const FOCUSABLE_ELEMENTS_SELECTORS = [
  "button",
  "[href]",
  "input",
  "select",
  "textarea",
  "[tabindex]:not([tabindex='-1'])"
].join(", ");

export interface DrawerProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose(affordance: string | undefined): void;
  position: "start" | "end";
  setFocusOnOpen?: boolean;
  setFocusOnClose?: boolean;
  titleElementId: string;
  returnFocusSelector?: string;
}

class Drawer extends React.Component<DrawerProps> {
  static drawerClassName = "drawer";
  static drawerOverlayClassName = "drawer-overlay";
  static defaultProps = {
    isOpen: false,
    setFocusOnOpen: true,
    setFocusOnClose: true,
    className: "",
    position: "start",
    returnFocusSelector: ""
  };

  drawerRef: React.RefObject<HTMLDivElement>;

  initiallyFocusedElement: Element | null;

  constructor(props: DrawerProps) {
    super(props);
    this.drawerRef = React.createRef();
    this.initiallyFocusedElement = null
  }

  componentDidUpdate(prevProps: DrawerProps) {
    const isOpening = !prevProps.isOpen && this.props.isOpen;
    const isClosing = prevProps.isOpen && !this.props.isOpen;
    if (isOpening) {
      this.handleOpen();
    }
    if (isClosing) {
      this.handleClose(true);
    }
  }

  // componentWillUnmount() {
  //   document.removeEventListener("keydown", this.handleKeyDown);
  // }

  focusOnContent = () => {
    let focusable;

    if (this.drawerRef.current) {
      focusable = this.drawerRef.current.querySelector<HTMLElement>(
        FOCUSABLE_ELEMENTS_SELECTORS
      );
    }

    if (focusable) {
      focusable.focus();
    }
  };

  handleOpen = () => {
    const { setFocusOnOpen } = this.props;

    this.initiallyFocusedElement = document.activeElement;

    if (setFocusOnOpen) {
      /* With styles we have it requires waiting two animation frames (requestAnimationFrame cycles)
      before you can focus on an element, so without timeout focus won't be set.
      When delay is less when 400 content will glitch in some cases. See US574068 for issue description.*/
      const ANIMATION_DELAY = 400;
      setTimeout(this.focusOnContent, ANIMATION_DELAY);
    }
  };

  handleClose = (propsChanged: boolean, affordance?: string) => {
    const { returnFocusSelector, setFocusOnClose, onClose } = this.props;

    if (setFocusOnClose) {
      const elementToFocus: any = returnFocusSelector
        ? document.querySelector(returnFocusSelector)
        : this.initiallyFocusedElement;

      if (elementToFocus) {
        // @ts-igonre
        (elementToFocus).focus();
      }
    }

    if (!propsChanged) {
      onClose(affordance);
    }
  };

  handleOverlayClick = () => {
    this.handleClose(false, INTERACTIONS_AFFORDANCE.OVERLAY);
  };

  renderOverlay = () => {
    const { isOpen } = this.props;

    const { drawerOverlayClassName } = Drawer;
    const overlayClassName = cn(
      drawerOverlayClassName,
      isOpen && `${drawerOverlayClassName}--open`
    );
    return (
      <div
        className={overlayClassName}
        data-auto="drawer-overlay"
        onClick={this.handleOverlayClick}
      />
    );
  };

  renderDrawer = () => {
    const { isOpen, position, children, titleElementId } = this.props;
    const { drawerClassName } = Drawer;
    const className = cn(
      drawerClassName,
      isOpen && `${drawerClassName}--open`,
      position === "start" && `${drawerClassName}--start-positioned`,
      position === "end" && `${drawerClassName}--end-positioned`
    );

    return (
      <div
        className={className}
        ref={this.drawerRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-labelledby={titleElementId}
        data-auto="drawer"
        tabIndex={-1}
      >
        {children}
      </div>
    );
  };

  render() {
    // It appears that document can be undefined initially in case of server-side rendering.
    // Would appreciate any suggestions for more elegant workaround
    if (typeof document === "undefined") {
      return null;
    }
    const drawer = (
      <>
        {this.renderOverlay()}
        {this.renderDrawer()}
      </>
    );

    return drawer;
  }
}

export default Drawer;
