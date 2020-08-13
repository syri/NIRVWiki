interface IPage {
  name: string;
  file: string;
  home?: boolean;
}

interface ICategory {
  name: string;
  path: string;
  pages: IPage[];
}

interface IStructure {
  categories?: ICategory[];
}
