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

export const replaceUrls = (content:string, replacementUrl:string) => {
  return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl);
};