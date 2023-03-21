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
- 开头输入 [[/]] 或者 [[空格]] 展示预设提示词(Prompt)。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
