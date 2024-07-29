import "react-quill/dist/quill.snow.css";

interface QuillToolBarProps {
  toolBarId: string
}

export const QuillToolBar = ({ toolBarId } : QuillToolBarProps) => {
  return (
    <div id={toolBarId}>
      <span className="ql-formats">
        <select className="ql-header">
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
          <option value="" selected>Normal</option>
        </select>

        <select className="ql-font">
          <option value="lora" > Lora </option>
          <option value="roboto">Roboto</option>
          <option value="montserrat">Montserrat</option>
        </select>
        <select className="ql-size">
          <option value="small">Small</option>
          <option value="normal">normal</option>
          <option value="large">Large</option>
          <option value="huge">Huge</option>
        </select>

        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
    </div>
  )
}
