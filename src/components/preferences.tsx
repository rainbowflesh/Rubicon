export default function preferences() {
  return (
    <>
      <div className="window scale-down" style={{ width: "30rem" }}>
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title">Modeless Dialog</h1>
          <button aria-label="Resize" disabled className="hidden"></button>
        </div>
        <div className="separator"></div>

        <div className="modeless-dialog">
          <section className="field-row" style={{ justifyContent: "flex-start" }}>
            <label htmlFor="text_find" className="modeless-text">
              Find:
            </label>
            <input id="text_find" type="text" style={{ width: "100%" }} placeholder="" />
          </section>
          <section className="field-row" style={{ justifyContent: "flex-end" }}>
            <button className="btn">Cancel</button>
            <button className="btn" style={{ width: "95px" }}>
              Find
            </button>
          </section>
        </div>
      </div>
    </>
  );
}