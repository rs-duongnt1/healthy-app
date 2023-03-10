import moment from "moment";
import {
  CardListItemTag,
  CardListItemTitle,
  CardListRoot,
  CardListRootCard,
  CardListThumbnail,
  CardListItemLabelRoot,
  ThumbnailOptions,
} from "./styles";
interface IImageItem {
  id: number;
  thumbnail: string;
  created_at: string;
  title?: string;
  tags?: string[];
  img?: string;
  date?: string;
  meal?: {
    thumbnail: string;
    name: string;
    meal_type: string;
  };
}

interface CardListProps {
  withTitle?: boolean;
  withTag?: boolean;
  thumbnailOptions?: ThumbnailOptions;
  items: IImageItem[];
}

export default function CardList({
  withTitle,
  withTag,
  thumbnailOptions,
  items,
}: CardListProps) {
  const generateTags = (tags: string[] | undefined) => {
    return tags?.map((tag) => `#${tag}`).join(" ") || "";
  };
  const formatDate = (date: string | undefined) => {
    return moment(date).format("MM.YY");
  };
  return (
    <CardListRoot>
      {items?.map((item) => (
        <CardListRootCard key={item.id}>
          <CardListThumbnail
            thumbnailOptions={thumbnailOptions}
            img={item.meal?.thumbnail}
          >
            <CardListItemLabelRoot>
              <span>
                {formatDate(item.date)}.
                <span className="txt-capitalize">{item.meal?.meal_type}</span>
              </span>
            </CardListItemLabelRoot>
          </CardListThumbnail>
          {withTitle && <CardListItemTitle>{item.title}</CardListItemTitle>}
          {withTag && (
            <CardListItemTag>{generateTags(item.tags)}</CardListItemTag>
          )}
        </CardListRootCard>
      ))}
    </CardListRoot>
  );
}
