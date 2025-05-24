export default function LanguageItem({ key, title, content }) {
  return (
    <div>
      <h4 className="item-title">{title}</h4>
      <p className="item-content">{content}</p>
    </div>
  );
}
