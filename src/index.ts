import icons from './icons.json';
import colors from './color.json';

interface Setting {
  bg: boolean;
  bgColor: string;
  textColor: string;
  borderRadius: number;
  showIcon: boolean;
  iconColor: boolean;
  pathnameLengthLimit: number;
}

enum Type {
  ONLOAD = 0,
  CONVERT = 1,
}

let defaultSetting: Setting = {
  bg: true,
  bgColor: '#a9a9a94f',
  textColor: '#000000d9',
  borderRadius: 15,
  showIcon: true,
  iconColor: true,
  pathnameLengthLimit: 20
};

let setting: Setting;

export function start(s: Setting = defaultSetting) {
  setting = { ...defaultSetting, ...s };
  replaceLinks(Type.ONLOAD);
}

export function convert(text: string, s: Setting = defaultSetting) {
  setting = { ...defaultSetting, ...s };
  return replaceLinks(Type.CONVERT, text);
}

function replaceLinks(type: Type, t: string = '') {
  if (type === Type.ONLOAD) {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', function () {
        // Find all elements in the page that contain text
        const elements = document.querySelector('body');

        getAllElements(elements);
      });
    }
  } else if (type === Type.CONVERT) {
    return convertText(t);
  }
}

function getAllElements(node) {
  console.log('node --> ', node);

  if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
    const parentTag = node.parentNode;
    if (parentTag.tagName !== 'A') {
      let html = parentTag.innerHTML;
      parentTag.innerHTML = html.replace(
        node.textContent,
        convertText(node.textContent)
      );
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    if (node.tagName !== 'A') {
      let len = node.childNodes.length;
      let n = node;
      for (let i = 0; i < len; i++) {
        getAllElements(n.childNodes[i]);
      }
    }
  }
}

function convertText(t: string): string {
  const text = t;

  const regex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
  let replacedText = text;

  // Find all links within the text and replace them with their titles
  let match;
  while ((match = regex.exec(text)) !== null) {
    const link = match[0];

    try {
      let url = new URL(link);
      let hostName = url.hostname.split('.').slice(-2).join('.');
      let displayHostName = url.hostname.replace('www.','');

      let icon = icons[hostName] ? icons[hostName] : icons['defualt'];
      let displayLink =
        `<span style='font-weight: bold;'>${displayHostName}</span>${url.pathname.length>setting.pathnameLengthLimit?url.pathname.substring(0,setting.pathnameLengthLimit)+'...':url.pathname}`;
      let replaceText = `<span style="
                position: relative;
                background: ${setting.bgColor};
                padding: 1.5px 3px;
                border-radius: ${setting.borderRadius}px;
                align-items: center;
                white-space: nowrap;
            ">
            ${setting.showIcon
        ? `<span style="
                  position: absolute;
                  top: 3px;
                  color: ${
                    setting.iconColor
                      ? colors[hostName]
                        ? colors[hostName]
                        : setting.textColor
                      : setting.textColor
                  };
                  margin-left: 2px;
              ">
                ` +
          icon +
          `
              </span>`
        : ``}
      <a href="${link}" style="
                  margin-left: 21px;
                  text-decoration: none;
                  color: ${setting.textColor};
              " title="${link}">${displayLink}</a>
            </span>`;
      replacedText = replacedText.replace(link, replaceText);
    } catch (error) {
      console.error(`Error fetching link title: ${error}`);
    }
  }
  return replacedText;
}

export const linkStyler = {
  start: start,
  convert: convert,
};
