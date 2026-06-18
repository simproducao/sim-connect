export type SignalType = 'SDI' | 'HDMI' | 'NDI' | 'XLR' | 'FIBER' | 'DANTE' | 'USB' | 'ETHERNET' | 'POWER'

export type PortDirection = 'input' | 'output'

export interface Port {
  id: string
  label: string
  direction: PortDirection
  signalType: SignalType
}

export interface EquipmentDef {
  id: string
  name: string
  category: string
  color: string
  ports: Port[]
  quantity: number
}

export interface DiagramProject {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  nodes: any[]
  edges: any[]
}

export interface Connection {
  from: string
  to: string
  cable: string
  signalType: string
  notes?: string
}
