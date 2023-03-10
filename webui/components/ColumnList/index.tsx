import moment from "moment";
import Stack from "../Stack";
import {
  ColumnListItemTag,
  ColumnListItemTitle,
  ColumnListRoot,
  ColumnListRootCard,
  ColumnListThumbnail,
  ColumnListItemLabelRoot,
} from "./styles";
interface IColumn {
  id: number;
  thumbnail: string;
  date: string;
  description?: string;
  tags?: string[];
}

interface ColumnListProps {
  columns: IColumn[];
}

export default function ColumnList({ columns }: ColumnListProps) {
  return (
    <ColumnListRoot>
      {columns?.map((item) => (
        <ColumnListRootCard key={item.id}>
          <ColumnListThumbnail img={item.thumbnail}>
            <ColumnListItemLabelRoot>
              <span>{moment(item.date).format("YYYY.MM.DD HH:ss")}</span>
            </ColumnListItemLabelRoot>
          </ColumnListThumbnail>
          <ColumnListItemTitle className="line-clamp line-clamp-2">{item.description}</ColumnListItemTitle>
          <ColumnListItemTag>
            <Stack spacing={10}>
              {item.tags?.map((tag) => (
                <span>#{tag}</span>
              ))}
            </Stack>
          </ColumnListItemTag>
        </ColumnListRootCard>
      ))}
    </ColumnListRoot>
  );
}
