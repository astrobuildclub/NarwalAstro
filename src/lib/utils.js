// @ts-nocheck
export function numberWithZero(num) {
  return num < 10 ? "0" + num : num;
}

export function getCount(parent, getChildrensChildren){
  var relevantChildren = 0;
  var children = parent.childNodes.length;
  for(var i=0; i < children; i++){
      if(parent.childNodes[i].nodeType != 3){
          if(getChildrensChildren)
              relevantChildren += getCount(parent.childNodes[i],true);
          relevantChildren++;
      }
  }
  return relevantChildren;
}

export function replaceUrls(content, replacementUrl){
  return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl);
};

export function slugify(input) {
  if (!input)
      return '';
  // make lower case and trim
  var slug = input.toLowerCase().trim();
  // remove accents from charaters
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, '-');
  return slug;
}


export function getAspectRatioFromEmbedString(embedString) {
  // Use regular expressions to extract width and height
  const widthMatch = embedString.match(/width="(\d+)"/);
  const heightMatch = embedString.match(/height="(\d+)"/);

  if (!widthMatch || !heightMatch) {
    throw new Error('Width and/or height attributes not found in the provided embed string');
  }

  const width = parseInt(widthMatch[1]);
  const height = parseInt(heightMatch[1]);

  // Function to calculate the GCD of two numbers
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  const gcdValue = gcd(width, height);

  // Simplify the aspect ratio
  const simplifiedWidth = width / gcdValue;
  const simplifiedHeight = height / gcdValue;

  return `${simplifiedWidth} / ${simplifiedHeight}`;
}