/**
 * ChatGPT配置
 */
interface SettingChatgptType {
  /**
   * OpenAi token
   */
  token: string
  /** 代理服务配置 */
  proxy: {
    /** 代理服务地址 */
    address: string
    /** 代理服务token */
    param: string
  }
}
/** 通用设置 */
interface SettingGeneralType {
  /** 显示模式 */
  dispalyMode: 'auto' | 'dark' | 'light'
  /** 窗口置顶 */
  windowTop: boolean
  /** 保存窗口位置 */
  saveWindowPosition: boolean
  /** 窗口尺寸 */
  windowSize: {
    width: number
    height: number
  }
  /**窗口位置；由系统自己记录 */
  windowPosition: {
    width?: number
    height?: number
  }
  /** 字体 */
  fontFamily: string
  /** 字体大小 */
  fontSize: number
}

/** 快捷键配置 */
interface SettingShortcutsType {
  send: string
  refresh: string
  minimize: string
  windowTop: string
  doFixedWindowPosition: string
  undoFixedWindowPosition: string
}

/** 其他特殊配置 */
interface SettingOtherType {
  devMode: boolean
}


interface SettingType {
  /** ChatGPT配置 */
  chatgpt: SettingChatgptType
  /** 通用设置 */
  general: SettingGeneralType
  /** 快捷键配置 */
  shortcuts: SettingShortcutsType
  /** 其他特殊配置 */
  other: SettingOtherType
}

export { type SettingType }
