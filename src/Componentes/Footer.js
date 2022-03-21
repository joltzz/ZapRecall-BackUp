export default function Footer({ checaRespondidas, icons }) {
  return (
    <footer>
      <div>
        {checaRespondidas()}
        <div className="icones-footer">
          {icons.map((icon, index) => {
            let css;
            if (icon === "close-circle") css = "resp-nao";
            if (icon === "help-circle") css = "resp-quase";
            if (icon === "checkmark-circle") css = "resp-zap";

            return <ion-icon key={index} class={css} name={icon}></ion-icon>;
          })}
        </div>
      </div>
    </footer>
  );
}
