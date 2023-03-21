export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI chatGPT and Vercel
- 由 [@wallezen](https://github.com/wallezen) 基于 [chatgpt-vercel](https://github.com/ourongxing/chatgpt-vercel) 开发部署。
- 开头输入 [[/]] 或者 [[空格]] 可以展示预设提示词(Prompt)，紧跟在提示词后输入你的问题或提出你的需求，可以得到更好的回答。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
