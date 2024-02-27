// @ts-nocheck
"use client";
import React, { useEffect, useRef } from "react";
import Script from "next/script";

const TableauComponent = () => {
  const vizRef = useRef();

  useEffect(() => {
    const vizElement = vizRef.current;
    const divElement = vizElement.parentNode;

    if (divElement.offsetWidth > 800) {
      vizElement.style.minWidth = "1000px";
      vizElement.style.maxWidth = "100%";
      vizElement.style.minHeight = "850px";
      vizElement.style.maxHeight = divElement.offsetWidth * 0.75 + "px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.minWidth = "1000px";
      vizElement.style.maxWidth = "100%";
      vizElement.style.minHeight = "850px";
      vizElement.style.maxHeight = divElement.offsetWidth * 0.75 + "px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.minHeight = "750px";
      vizElement.style.maxHeight = divElement.offsetWidth * 1.77 + "px";
    }

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1709017133160"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt=" "
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Me&#47;MediaSawocangkring&#47;Dashboard1&#47;1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" ref={vizRef}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="MediaSawocangkring/Overview" />
        <param name="tabs" value="yes" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Me&#47;MediaSawocangkring&#47;Dashboard1&#47;1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
      <Script src="https://public.tableau.com/javascripts/api/viz_v1.js" />
    </div>
  );
};

export default TableauComponent;
