import css from "./LoadMoreBtn.module.css"

export default function LoadMoreButton({ onClick }) {
  return (
    <button className={css.btnLoadMore} onClick={onClick}>
      Load more
    </button>
  );
}
