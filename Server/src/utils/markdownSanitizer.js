const sanitizeHtml = require("sanitize-html");
const { parse } = require("marked");
const turndown = require("turndown");

const turndownService = new turndown();

const markdownSantizer = (problemData) => {
  try {
    const convertedHtml = parse(problemData);
    const santizedHtmlContent = sanitizeHtml(convertedHtml, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    });
    const santizedStringContent = turndownService.turndown(santizedHtmlContent);

    console.log("Converted Html", convertedHtml);
    console.log("Sanitized HTML", santizedHtmlContent);
    console.log("Sanitized String", santizedStringContent);

    return santizedHtmlContent;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

module.exports = markdownSantizer;
