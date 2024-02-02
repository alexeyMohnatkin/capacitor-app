import { Capacitor } from "@capacitor/core";
import { Filesystem } from "@capacitor/filesystem";

function downloadURI(uri: string, name: string) {
  var element = document.createElement("a");
  element.setAttribute("href", uri);
  element.setAttribute("download", name);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const downloadFile = (uri: string, name: string) => {
  if (Capacitor.isNativePlatform()) {
    Filesystem.downloadFile({
      path: name,
      url: uri,
      progress: true,
    });
  } else {
    downloadURI(uri, name);
  }
};

export default downloadFile;
