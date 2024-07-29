import { $ } from "@wdio/globals";

export class Helper {
  async getElementById(id, isAccessibilityId) {
    if (isAccessibilityId) {
      return await $(`~ ${id}`);
    }
    return await $(`id:${id}`);
  }

  async typeData(id, text, isAccessibility) {
    const element = await this.getElementById(id, isAccessibility);
    await element.setValue(text);
  }

  async openTab(tab) {
    await this.getElementById(tab, false).click();
  }

  async openAccTab(tab) {
    await (await this.getElementById(tab, true)).click();
  }
}
