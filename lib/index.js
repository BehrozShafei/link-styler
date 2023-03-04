"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkStyler = void 0;
function linkStyler(s = {
    bg: true,
    bgColor: '#a9a9a94f',
    textColor: '#000000d9',
    borderRadius: 15,
    showIcon: true,
}) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('linkStyler->', 'Start');
        console.log('linkStyler->', s);
        replaceLinks(s);
    });
}
exports.linkStyler = linkStyler;
function replaceLinks(s) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof window !== 'undefined') {
            console.log('replaceLinks->', 'window');
            window.addEventListener('load', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log('replaceLinks->', 'window LOAD');
                    // Find all elements in the page that contain text
                    const elements = document.querySelectorAll('*:not(script):not(style):not(meta):not(title):not(head):not(html)');
                    // Loop through each element and find links within the text
                    for (let i = 0; i < elements.length; i++) {
                        const element = elements[i];
                        const text = element.innerHTML || '';
                        console.log('element', element);
                        console.log('text', text);
                        const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
                        let replacedText = text;
                        // Find all links within the text and replace them with their titles
                        let match;
                        while ((match = regex.exec(text)) !== null) {
                            const link = match[0];
                            try {
                                // for get site title
                                /*const response = await fetch('https://title.mihir.ch/' + link);
                                const title = await response;
                                await console.log('response', response);*/
                                /*const title = response.data.match(
                                  /<title[^>]*>([^<]+)<\/title>/
                                )[1];*/
                                let replaceText = `<span style="
                position: relative;
                background: ${s.bgColor};
                padding: 1.5px 3px;
                border-radius: ${s.borderRadius}px;
                align-items: center;
            ">`;
                                replaceText += s.showIcon
                                    ? `<span style="
                  position: absolute;
                  top: 3px;
              ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                </svg>
              </span>`
                                    : ``;
                                replaceText += `<a href="${link}" style="
                  margin-left: 19px;
                  text-decoration: none;
                  color: ${s.textColor};
              ">${link}</a>
            </span>`;
                                replacedText = replacedText.replace(link, replaceText);
                            }
                            catch (error) {
                                console.error(`Error fetching link title: ${error}`);
                            }
                        }
                        // Set the innerHTML of the element to the replaced text
                        console.log('replacedText', replacedText);
                        element.innerHTML = replacedText;
                    }
                });
            });
        }
    });
}