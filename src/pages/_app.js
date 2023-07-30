import '@/styles/globals.css'
import { createContext, useState } from 'react'

export const ProcessorContext = createContext('none')
export const MotherboardContext = createContext('none')
export const RamContext = createContext('none')
export const SsdContext = createContext('none')
export const PowerSupplyContext = createContext('none')
export const CasingContext = createContext('none')
export const MonitorContext = createContext('none')
export const KeyboardContext = createContext('none')
export const MouseContext = createContext('none')


export default function MyApp({ Component, pageProps }) {
  const [processor, setProcessor] = useState(null)
  const [motherboard, setMotherboard] = useState(null)
  const [ram, setRam] = useState(null)
  const [ssd, setSsd] = useState(null)
  const [powerSupply, setPowerSupply] = useState(null)
  const [casing, setCasing] = useState(null)
  const [monitor, setMonitor] = useState(null)
  const [keyboard, setKeyboard] = useState(null)
  const [mouse, setMouse] = useState(null)

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <ProcessorContext.Provider value={{ processor, setProcessor }}>
      <MotherboardContext.Provider value={{ motherboard, setMotherboard }}>
        <RamContext.Provider value={{ ram, setRam }}>
          <SsdContext.Provider value={{ ssd, setSsd }}>
            <PowerSupplyContext.Provider value={{ powerSupply, setPowerSupply }}>
              <CasingContext.Provider value={{ casing, setCasing }}>
                <MonitorContext.Provider value={{ monitor, setMonitor }}>
                  <KeyboardContext.Provider value={{ keyboard, setKeyboard }}>
                    <MouseContext.Provider value={{ mouse, setMouse }}>


                      <Component {...pageProps} />


                    </MouseContext.Provider>
                  </KeyboardContext.Provider>
                </MonitorContext.Provider>
              </CasingContext.Provider>
            </PowerSupplyContext.Provider>
          </SsdContext.Provider>
        </RamContext.Provider>
      </MotherboardContext.Provider>
    </ProcessorContext.Provider>

  )
}
