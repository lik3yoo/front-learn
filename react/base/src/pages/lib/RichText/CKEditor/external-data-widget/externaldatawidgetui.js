// external-data-widget/externaldatawidgetui.js

import { Plugin } from "@ckeditor/ckeditor5-core";
import { ButtonView } from "@ckeditor/ckeditor5-ui";

const BitcoinLogoIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" preserveAspectRatio="xMidYMid" viewBox="0 0 1 1"><path d="M63.036 39.741c-4.274 17.143-21.637 27.576-38.782 23.301C7.116 58.768-3.317 41.404.959 24.262 5.23 7.117 22.594-3.317 39.734.957c17.144 4.274 27.576 21.64 23.302 38.784z" style="fill:#f7931a" transform="scale(.01563)"/><path d="M46.1 27.441c.638-4.258-2.604-6.547-7.037-8.074l1.438-5.768-3.511-.875-1.4 5.616c-.923-.23-1.871-.447-2.813-.662l1.41-5.653-3.51-.875-1.438 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.679 1.296 1.636 2.042l-3.94 15.801c-.174.432-.615 1.08-1.61.834.036.051-2.551-.637-2.551-.637l-1.743 4.019 4.569 1.139c.85.213 1.683.436 2.503.646l-1.453 5.834 3.507.875 1.439-5.772c.958.26 1.888.5 2.798.726l-1.434 5.745 3.51.875 1.454-5.823c5.987 1.133 10.489.676 12.384-4.739 1.527-4.36-.076-6.875-3.226-8.515 2.294-.529 4.022-2.038 4.483-5.155zM38.08 38.69c-1.085 4.36-8.426 2.003-10.806 1.412l1.928-7.729c2.38.594 10.012 1.77 8.878 6.317zm1.086-11.312c-.99 3.966-7.1 1.951-9.082 1.457l1.748-7.01c1.982.494 8.365 1.416 7.334 5.553z" style="fill:#fff" transform="scale(.01563)"/></svg>';

class ExternalDataWidgetUI extends Plugin {
  init() {
    const editor = this.editor;
    const externalWidgetCommand = editor.commands.get("external");

    // The "external" button must be registered among the UI components of the editor
    // to be displayed in the toolbar.
    editor.ui.componentFactory.add("external", (locale) => {
      const button = new ButtonView(locale);

      button.set({
        label: "Bitcoin rate",
        tooltip: true,
        withText: false,
        icon: BitcoinLogoIcon,
      });

      // Disable the external data widget button when the command is disabled.
      button.bind("isEnabled").to(externalWidgetCommand);

      // Execute the command when the button is clicked (executed).
      button.on("execute", () => {
        editor.execute("external");
        // Set focus on the editor content
        editor.editing.view.focus();
      });

      return button;
    });
  }
}

export default ExternalDataWidgetUI;
