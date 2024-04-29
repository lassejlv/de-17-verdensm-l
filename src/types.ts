export interface Item {
  id: string;
  title: string;
  byline: string;
  color: string;
  icon: string;
  image: string;
  request: {
    type: "GET";
    url: string;
  };
}
