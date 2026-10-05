export function enhanceCodeCopy(): void {
  for (const content of document.querySelectorAll<HTMLElement>("[data-markdown]")) {
    const template = content.querySelector<HTMLTemplateElement>("[data-code-controls]");
    if (template === null) continue;
    for (const pre of content.querySelectorAll<HTMLElement>("pre")) {
      const code = pre.querySelector<HTMLElement>("code");
      if (code === null) continue;
      const block = template.content.firstElementChild?.cloneNode(true);
      if (!(block instanceof HTMLElement)) continue;
      pre.dataset.copyReady = "";
      pre.before(block);
      block.append(pre);
      const button = block.querySelector<HTMLButtonElement>("[data-copy-code]");
      const feedback = block.querySelector<HTMLElement>("[data-copy-feedback]");
      if (button === null || feedback === null) continue;
      let copying = false;
      button.addEventListener("click", async () => {
        if (copying) return;
        copying = true;
        button.setAttribute("aria-busy", "true");
        feedback.textContent = "";
        try {
          await navigator.clipboard.writeText(code.textContent ?? "");
          feedback.textContent = "Copied.";
        } catch {
          feedback.textContent = "Copy failed. Select and copy the code.";
        } finally {
          copying = false;
          button.removeAttribute("aria-busy");
        }
      });
    }
  }
}
