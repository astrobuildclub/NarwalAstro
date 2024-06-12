// @ts-nocheck

export function slugify(input) {
  if (!input) return ''

  // make lower case and trim
  var slug = input.toLowerCase().trim()

  // remove accents from charaters
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim()

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, '-')

  return slug
}

export const joinClasses = (...classes) => classes.filter(c => !!c).join(" ");

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