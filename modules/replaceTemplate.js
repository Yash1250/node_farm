/** @format */

const replaceTemplate = (tempCard, elem) => {
  let tempOutput = tempCard.replace(/{%PRODUCTNAME%}/g, elem.productName);
  tempOutput = tempOutput.replace(/{%IMAGE%}/g, elem.image);
  tempOutput = tempOutput.replace(/{%QUANTITY%}/g, elem.quantity);
  tempOutput = tempOutput.replace(/{%PRICE%}/g, elem.price);
  tempOutput = tempOutput.replace(/{%ID%}/g, elem.id);
  tempOutput = tempOutput.replace(/{%DESCRIPTION%}/g, elem.description);
  tempOutput = tempOutput.replace(/{%FROM%}/g, elem.from);
  tempOutput = tempOutput.replace(/{%NUTRIENTS%}/g, elem.nutrients);
  tempOutput = tempOutput.replace(/{%DESCRIPTION%}/g, elem.description);
  if (!elem.organic)
    tempOutput = tempOutput.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return tempOutput;
};

module.exports = replaceTemplate;
