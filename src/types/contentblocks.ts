// types/contentblocks.ts
export interface ImageNode {
  altText: string;
  title: string;
  sourceUrl: string;
}

export interface Image {
  node: ImageNode;
}

export interface ContentFieldsContentImageLayout {
  __typename: "ContentFieldsContentImageLayout";
  showCaption: boolean;
  size: string;
  image: Image;
}

export interface Text {
  text: string;
  size: string[];
}

export interface ContentFieldsContentTextLayout {
  __typename: "ContentFieldsContentTextLayout";
  text: Text;
}

export interface ContentFieldsContentColorModeLayout {
  __typename: "ContentFieldsContentColorModeLayout";
}

export interface ContentFieldsContentVideoLayout {
  __typename: "ContentFieldsContentVideoLayout";
}

export interface ContentFieldsContentTestimonialLayout {
  __typename: "ContentFieldsContentTestimonialLayout";
}

export type ContentField =
  | ContentFieldsContentImageLayout
  | ContentFieldsContentTextLayout
  | ContentFieldsContentColorModeLayout
  | ContentFieldsContentVideoLayout
  | ContentFieldsContentTestimonialLayout;

export interface ContentFields {
  content: ContentField[];
}
