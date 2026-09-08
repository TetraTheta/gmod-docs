// Modified version of https://github.com/danielbrendel/steamwidgets-js
const OPEN_GRAPH_API_ENDPOINT = "https://open-graph-api-coral.vercel.app/api/opengraph";

const parseBool = (value, def) => (["true", "false", true, false].includes(value) && JSON.parse(value)) || def;

class SteamWorkshopElem extends HTMLElement {
  DESCRIPTION_MAX_LENGTH = 240;
  storedData = {};

  connectedCallback() {
    let itemId = typeof this.attributes.itemid !== "undefined" ? this.attributes.itemid.value : null;
    let viewText = typeof this.attributes.viewtext !== "undefined" ? this.attributes.viewtext.value : "View Item";
    let styleBorder =
      typeof this.attributes["style-border-radius"] !== "undefined"
        ? this.attributes["style-border-radius"].value
        : null;

    if (itemId !== null) {
      this.storedData = {
        itemid: itemId,
        viewtext: viewText,
        styleBorder: styleBorder,
      };
      this.setupWidget(itemId, viewText, styleBorder);
    }
  }
  setupWidget(itemId, viewText, styleBorder) {
    console.log(`itemId: ${itemId} | viewText: ${viewText} | styleBorder: ${styleBorder}`);

    let req = new XMLHttpRequest();
    let self = this;
    req.onreadystatechange = function () {
      if (req.readyState == XMLHttpRequest.DONE) {
        if (req.status !== 200 || req.responseText === "") {
          console.warn("Failed to load Steam Workshop data", req.status, req.responseText);
          return;
        }

        let json = JSON.parse(req.responseText);
        console.log(json);
        // border style
        let borderRoot = "";
        let borderImage = "";
        if (styleBorder === "none") {
          borderRoot = ' style="border-radius:0;"';
          borderImage =
            ' style="border-top-left-radius:0;border-bottom-left-radius:0;background-image:url(' + json.image + ');"';
        } else if (styleBorder === null || styleBorder === "small") {
          borderRoot = ' style="border-radius:4px;"';
          borderImage =
            ' style="border-top-left-radius:4px;border-bottom-left-radius:4px;background-image:url(' +
            json.image +
            ');"';
        } else if (styleBorder === "max") {
          borderRoot = ' style="border-radius:25px;"';
          borderImage =
            ' style="border-top-left-radius:25px;border-bottom-left-radius:25px;background-image:url(' +
            json.image +
            ');"';
        }
        // description
        let description = json.desc.replace(/\[url=.*?\]|\[\/url\]/g, "");
        if (description.length >= self.DESCRIPTION_MAX_LENGTH) {
          description = description.substr(0, self.DESCRIPTION_MAX_LENGTH - 1) + "…";
        }
        // html
        let html = `<div class="steam-workshop"${borderRoot}><div class="steam-workshop-preview"${borderImage}></div><div class="steam-workshop-info"><div class="steam-workshop-info-title">${json.title}</div><div class="steam-workshop-info-description">${description}</div><div class="steam-workshop-info-footer"><div class="steam-workshop-info-footer-action"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=${itemId}" target="_blank"><span>${viewText}</span></a></div></div></div></div>`;
        self.innerHTML = html;
      }
    };
    req.open(
      "GET",
      OPEN_GRAPH_API_ENDPOINT +
        "?url=" +
        encodeURIComponent("https://steamcommunity.com/sharedfiles/filedetails/?id=" + itemId),
      true,
    );
    req.send();
  }
}

window.customElements.define("steam-workshop", SteamWorkshopElem);
