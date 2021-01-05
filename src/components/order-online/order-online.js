import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Form, Field } from "react-final-form";
import getLatAndLong from "../../utils/get-lat-and-long";
import getDistance from "../../utils/get-distance";
import Header from "../header";

import "./order-online.scss";

const distanceMessages = {
  IS_SUPER_CLOSE: "isSuperClose",
  IS_IN_RADIUS: "isInRadius",
  IS_NOT_IN_RADIUS: "isNotInRadius",
  IS_ERROR: "isError"
};

const block = "order-online";

const OrderOnline = () => {
  const [distanceMessage, setDistanceMessage] = useState("");
  const [distance, setDistance] = useState();
  //const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    if (distance) {
      if (distance === 1) {
        setDistanceMessage(distanceMessages.IS_SUPER_CLOSE);
      } else if (distance <= 10) {
        setDistanceMessage(distanceMessages.IS_IN_RADIUS);
      } else {
        setDistanceMessage(distanceMessages.IS_NOT_IN_RADIUS);
      }
    }
  }, [distance]);

  const onSubmit = async (data, { reset }) => {
    try {
      const { address } = data;
      const { lat, lng } = await getLatAndLong(address);
      if (!lat || !lng) throw new Error();
      const deliveryDistance = getDistance(36.0681638, -78.924559, lat, lng);
      // setUserAddress(address);
      setDistance(Math.ceil(deliveryDistance));
    } catch (error) {
      setDistanceMessage(distanceMessages.IS_ERROR);
    }
  };

  const renderDetails = () => (
    <p>
      Send us an email at &nbsp;
      <a href="mailto:dogdoorpetfood@gmail.com">dogdoorpetfood@gmail.com</a>
      &nbsp; or call us at <a href="tel:9198082545">(919) 808-2545</a> to place
      an order and setup a delivery.
    </p>
  );

  return (
    <div className={block}>
      <Helmet>
        <title>Order Online</title>
        <meta
          name="description"
          content="We offer a delivery service to locations within 10 miles from our
        headquaters in north Durham."
        />
      </Helmet>
      <Header showHeader={"show"} />
      <h2 className={`${block}__title`}>DELIVERY SERVICE</h2>
      <p className={`${block}__service-details`}>
        We offer a delivery service to locations within 10 miles from our
        headquaters in north Durham. Orders must be a minimun of $50.
      </p>
      <p className={`${block}__service-details`}>
        Please enter your address below to check if you are within our delivery
        radius.
      </p>
      <Form onSubmit={onSubmit}>
        {({
          dirty,
          dirtyFieldsSinceLastSubmit,
          handleSubmit,
          submitFailed,
          submitting,
          submitError,
          submitErrors
        }) => {
          return (
            <form onSubmit={handleSubmit} className={`${block}__form`}>
              {submitError && <p>{submitError}</p>}
              <div>
                <label className={`${block}__label`}>Delivery Address</label>
                <Field
                  className={`${block}__input`}
                  name="address"
                  component="input"
                  type="text"
                />
              </div>
              <button
                className={`${block}__button`}
                type="submit"
                disabled={false}
              >
                Check Address
              </button>
            </form>
          );
        }}
      </Form>
      <div className={`${block}__distance-info`}>
        {distanceMessage === distanceMessages.IS_SUPER_CLOSE && (
          <>
            <p>
              <span role="img" aria-label="smiley face">
                &#128512;
              </span>
              &nbsp; You're right around the corner from Dog Door headquaters!
            </p>
            {renderDetails()}
          </>
        )}
        {distanceMessage === distanceMessages.IS_IN_RADIUS && (
          <>
            <p>
              <span role="img" aria-label="smiley face">
                &#128512;
              </span>
              &nbsp; You're {distance} miles from Dog Door headquaters!
            </p>
            {renderDetails()}
          </>
        )}
        {distanceMessage === distanceMessages.IS_NOT_IN_RADIUS && (
          <>
            <p>
              <span role="img" aria-label="sad face">
                &#128546;
              </span>
              &nbsp; Sorry, you're {distance} miles from Dog Door headquaters.
            </p>
            <p>You can still visit one of our retail locations.</p>
          </>
        )}
        {distanceMessage === distanceMessages.IS_ERROR && (
          <p>
            <span role="img" aria-label="sad face">
              &#128546;
            </span>
            &nbsp; Sorry, we encuntered an error while looking up your address.
            Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderOnline;
