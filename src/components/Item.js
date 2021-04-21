import React from "react";
import date from "date-and-time";

export default function item(props) {
  const { item } = props;

  const now = new Date();
  const today = date.format(now, "YYYY-MM-DD");
  const beforOneMonth = date.addMonths(
    date.parse(item.expiry, "YYYY-MM-DD"),
    1
  );

  return (
    <div key={item._id} class="row">
      <div class="leftItem">
        <p class="item">{item.title}</p>
        <p class="expireDate">{item.expiry}</p>
      </div>
      <div class="rightItem">
        {today > item.expiry ? (
          <>
            <p
              style={{ backgroundColor: "#0080003d", color: "green" }}
              class="status"
            >
              Healthy
            </p>
            <i
              class="fa fa-trash deleteIcon"
              aria-hidden="true"
              style={{ color: item.color }}
            ></i>
          </>
        ) : beforOneMonth > item.expiry ? (
          <>
            <p
              style={{ backgroundColor: "#ff00006b", color: "red" }}
              class="status"
            >
              Expired Soon
            </p>
            <i
              class="fa fa-trash deleteIcon"
              aria-hidden="true"
              style={{ color: item.color }}
            ></i>
          </>
        ) : (
          <>
            <p
              style={{ backgroundColor: "#ff00006b", color: "red" }}
              class="status"
            >
              Expired
            </p>
            <i
              class="fa fa-trash deleteIcon"
              aria-hidden="true"
              style={{ color: item.color }}
            ></i>
          </>
        )}
      </div>
    </div>
  );
}
