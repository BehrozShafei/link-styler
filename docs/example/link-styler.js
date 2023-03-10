!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.linkStyler = e())
    : (t.linkStyler = e());
})(self, () =>
  (() => {
    "use strict";
    var t = {
        106: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Data = void 0),
            (e.Data = {
              defualt: {
                color: "",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-link-45deg' viewBox='0 0 16 16'> <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'/> <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'/> </svg>",
              },
              hashTag: {
                color: "",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hash" viewBox="0 0 16 16"> <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/> </svg>',
              },
              atsign: {
                color: "",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-at" viewBox="0 0 16 16">   <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/> </svg>',
              },
              "google.com": {
                color: "#dd4848",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-google' viewBox='0 0 16 16'> <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z'/> </svg>",
              },
              "youtube.com": {
                color: "#dd4848",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-youtube' viewBox='0 0 16 16'> <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'/> </svg>",
              },
              "facebook.com": {
                color: "#1673ff",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-facebook' viewBox='0 0 16 16'> <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'/> </svg>",
              },
              "linkedin.com": {
                color: "#0060f1",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-linkedin' viewBox='0 0 16 16'> <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'/> </svg>",
              },
              "stackoverflow.com": {
                color: "#e57d25",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-stack-overflow' viewBox='0 0 16 16'> <path d='M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z'/> <path d='M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z'/> </svg>",
              },
              "github.com": {
                color: "#000000",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-github' viewBox='0 0 16 16'> <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'/> </svg>",
              },
              "xbox.com": {
                color: "#0f760e",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-xbox' viewBox='0 0 16 16'> <path d='M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z'/> </svg>",
              },
              "microsoft.com": {
                color: "#019ce3",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-microsoft' viewBox='0 0 16 16'> <path d='M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z'/> </svg>",
              },
              "skype.com": {
                color: "#00a6e4",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-skype' viewBox='0 0 16 16'> <path d='M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z'/> </svg>",
              },
              "android.com": {
                color: "#3ad07e",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-android' viewBox='0 0 16 16'> <path d='M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'/> </svg>",
              },
              "npmjs.com": {
                color: "#c13433",
                svg: "<svg viewBox='0 0 27.23 27.23' style='width: 16px;'><rect fill='#c13433' width='27.23' height='27.23' rx='2'></rect><polygon fill='#fff' points='5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75'></polygon></svg>",
              },
            });
        },
        669: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.DefaultSetting = void 0),
            (e.DefaultSetting = {
              bg: !0,
              bgColor: "#a9a9a94f",
              textColor: "#000000d9",
              borderRadius: 15,
              showIcon: !0,
              iconColor: !0,
              pathnameLengthLimit: 20,
              atsignPath: "",
              hashPath: "",
            });
        },
        578: (t, e) => {
          var o;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Type = void 0),
            ((o = e.Type || (e.Type = {}))[(o.ONLOAD = 0)] = "ONLOAD"),
            (o[(o.CONVERT = 1)] = "CONVERT");
        },
        789: (t, e, o) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.convertTextLink = void 0);
          const n = o(106);
          e.convertTextLink = function (t, e) {
            const o = t;
            console.log("---\x3e", t);
            const l =
                /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g,
              a = /([@])\w+/g,
              s = /([#])\w+/g;
            let i,
              r = o;
            for (; null !== (i = l.exec(o)); ) {
              const t = i[0];
              try {
                let o = new URL(t),
                  l = o.hostname.split(".").slice(-2).join("."),
                  a = o.hostname.replace("www.", ""),
                  s = n.Data[l] ? n.Data[l].svg : n.Data.defualt.svg,
                  i = `<span style='font-weight: bold;'>${a}</span>${
                    o.pathname.length > e.pathnameLengthLimit
                      ? o.pathname.substring(0, e.pathnameLengthLimit) + "..."
                      : o.pathname
                  }`,
                  c = `<span style="\n                  position: relative;\n                  background: ${
                    e.bgColor
                  };\n                  padding: 1.5px 3px;\n                  border-radius: ${
                    e.borderRadius
                  }px;\n                  align-items: center;\n                  white-space: nowrap;\n              ">\n              ${
                    e.showIcon
                      ? `<span style="\n                    position: absolute;\n                    top: 3px;\n                    color: ${
                          e.iconColor && n.Data[l]
                            ? n.Data[l].color
                            : e.textColor
                        };\n                    margin-left: 2px;\n                ">\n                  ` +
                        s +
                        "\n                </span>"
                      : ""
                  }\n        <a href="${t}" style="\n                    margin-left: 21px;\n                    text-decoration: none;\n                    color: ${
                    e.textColor
                  };\n                " title="${t}">${i}</a>\n              </span>`;
                r = r.replace(t, c);
              } catch (t) {
                console.error(`Error fetching link title: ${t}`);
              }
            }
            for (; null !== (i = s.exec(o)); ) {
              const t = i[0];
              try {
                let o = t.replace("#", ""),
                  l = n.Data.hashTag.svg,
                  a = `<span style='font-weight: bold;'>${o}</span>`,
                  s = `<span style="\n                position: relative;\n                background: ${
                    e.bgColor
                  };\n                padding: 1.5px 3px;\n                border-radius: ${
                    e.borderRadius
                  }px;\n                align-items: center;\n                white-space: nowrap;\n            ">\n            ${
                    e.showIcon
                      ? `<span style="\n                  position: absolute;\n                  top: 3px;\n                  color: ${e.textColor};\n                  margin-left: 2px;\n              ">\n                ` +
                        l +
                        "\n              </span>"
                      : ""
                  }\n      <a href="${
                    e.hashPath + o
                  }" style="\n                  margin-left: 21px;\n                  text-decoration: none;\n                  color: ${
                    e.textColor
                  };\n              " title="${
                    e.hashPath
                  }">${a}</a>\n            </span>`;
                r = r.replace(t, s);
              } catch (t) {
                console.error(`Error fetching link title: ${t}`);
              }
            }
            for (; null !== (i = a.exec(o)); ) {
              const t = i[0];
              try {
                let o = t.replace("@", ""),
                  l = n.Data.atsign.svg,
                  a = `<span style='font-weight: bold;'>${o}</span>`,
                  s = `<span style="\n                position: relative;\n                background: ${
                    e.bgColor
                  };\n                padding: 1.5px 3px;\n                border-radius: ${
                    e.borderRadius
                  }px;\n                align-items: center;\n                white-space: nowrap;\n            ">\n            ${
                    e.showIcon
                      ? `<span style="\n                  position: absolute;\n                  top: 3px;\n                  color: ${e.textColor};\n                  margin-left: 2px;\n              ">\n                ` +
                        l +
                        "\n              </span>"
                      : ""
                  }\n      <a href="${
                    e.atsignPath + o
                  }" style="\n                  margin-left: 21px;\n                  text-decoration: none;\n                  color: ${
                    e.textColor
                  };\n              " title="${
                    e.atsignPath + o
                  }">${a}</a>\n            </span>`;
                r = r.replace(t, s);
              } catch (t) {
                console.error(`Error fetching link title: ${t}`);
              }
            }
            return r;
          };
        },
      },
      e = {};
    function o(n) {
      var l = e[n];
      if (void 0 !== l) return l.exports;
      var a = (e[n] = { exports: {} });
      return t[n](a, a.exports, o), a.exports;
    }
    var n = {};
    return (
      (() => {
        var t = n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.linkStyler = t.convert = t.start = void 0);
        const e = o(578),
          l = o(669),
          a = o(789);
        let s;
        function i(t = l.DefaultSetting) {
          (s = Object.assign(Object.assign({}, l.DefaultSetting), t)),
            c(e.Type.ONLOAD);
        }
        function r(t, o = l.DefaultSetting) {
          return (
            (s = Object.assign(Object.assign({}, l.DefaultSetting), o)),
            c(e.Type.CONVERT, t)
          );
        }
        function c(t, o = "") {
          if (t === e.Type.ONLOAD)
            "undefined" != typeof window &&
              window.addEventListener("load", function () {
                h(document.querySelector("body"));
              });
          else if (t === e.Type.CONVERT) return (0, a.convertTextLink)(o, s);
        }
        function h(t) {
          if (
            (console.log("node --\x3e ", t),
            t.nodeType === Node.TEXT_NODE && "" !== t.textContent.trim())
          ) {
            const e = t.parentNode;
            if ("A" !== e.tagName || "SCRIPT" != e.tagName) {
              let o = e.innerHTML;
              (o = o.replace(
                t.textContent,
                (0, a.convertTextLink)(t.textContent, s)
              )),
                (e.innerHTML = o);
            }
          } else if (t.nodeType === Node.ELEMENT_NODE && "A" !== t.tagName) {
            let e = t.childNodes.length,
              o = t;
            for (let t = 0; t < e; t++) h(o.childNodes[t]);
          }
        }
        (t.start = i),
          (t.convert = r),
          (t.linkStyler = { start: i, convert: r });
      })(),
      n
    );
  })()
);
