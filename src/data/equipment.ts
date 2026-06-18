import { EquipmentDef } from '../types'

export const EQUIPMENT: EquipmentDef[] = [
  {
    id: 'atem-2me-constellation',
    name: 'ATEM 2M/E Constellation 4K',
    category: 'MISTURA',
    color: '#1a3a5c',
    quantity: 1,
    ports: [
      { id: 'sdi-in-1', label: 'SDI IN 1', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-2', label: 'SDI IN 2', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-3', label: 'SDI IN 3', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-4', label: 'SDI IN 4', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-5', label: 'SDI IN 5', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-6', label: 'SDI IN 6', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-7', label: 'SDI IN 7', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-8', label: 'SDI IN 8', direction: 'input', signalType: 'SDI' },
      { id: 'pgm-out', label: 'PGM OUT', direction: 'output', signalType: 'SDI' },
      { id: 'pvw-out', label: 'PVW OUT', direction: 'output', signalType: 'SDI' },
      { id: 'aux-1', label: 'AUX 1', direction: 'output', signalType: 'SDI' },
      { id: 'aux-2', label: 'AUX 2', direction: 'output', signalType: 'SDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'atem-2me-production',
    name: 'ATEM 2M/E Production Studio 4K',
    category: 'MISTURA',
    color: '#1a3a5c',
    quantity: 1,
    ports: [
      { id: 'sdi-in-1', label: 'SDI IN 1', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-2', label: 'SDI IN 2', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-3', label: 'SDI IN 3', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-4', label: 'SDI IN 4', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-5', label: 'SDI IN 5', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-6', label: 'SDI IN 6', direction: 'input', signalType: 'SDI' },
      { id: 'pgm-out', label: 'PGM OUT', direction: 'output', signalType: 'SDI' },
      { id: 'pvw-out', label: 'PVW OUT', direction: 'output', signalType: 'SDI' },
      { id: 'aux-1', label: 'AUX 1', direction: 'output', signalType: 'SDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'ursa-broadcast-g2',
    name: 'URSA Broadcast G2',
    category: 'CÂMARA',
    color: '#1a4a2a',
    quantity: 3,
    ports: [
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'xlr-1', label: 'XLR IN 1', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-2', label: 'XLR IN 2', direction: 'input', signalType: 'XLR' },
    ]
  },
  {
    id: 'sony-pmw350',
    name: 'Sony PMW-350',
    category: 'CÂMARA',
    color: '#1a4a2a',
    quantity: 4,
    ports: [
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
      { id: 'xlr-1', label: 'XLR IN 1', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-2', label: 'XLR IN 2', direction: 'input', signalType: 'XLR' },
    ]
  },
  {
    id: 'birddog-p200',
    name: 'PTZ BirdDog P200',
    category: 'PTZ',
    color: '#2a3a1a',
    quantity: 3,
    ports: [
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'ndi', label: 'NDI', direction: 'output', signalType: 'NDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'birddog-p100',
    name: 'PTZ BirdDog P100',
    category: 'PTZ',
    color: '#2a3a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'ndi', label: 'NDI', direction: 'output', signalType: 'NDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'decimator-md-hx',
    name: 'Decimator MD-HX',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 5,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'micro-conv-bidi',
    name: 'Micro Converter BiDi SDI/HDMI 3G',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 15,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'micro-conv-hdmi-sdi',
    name: 'Micro Converter HDMI to SDI 3G',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 4,
    ports: [
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'micro-conv-sdi-hdmi',
    name: 'Micro Converter SDI to HDMI 3G',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 5,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'mini-conv-updowncross',
    name: 'Mini Converter UpDownCross HD',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'mini-conv-optical',
    name: 'Mini Converter Optical Fiber 12G',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 8,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'fiber-out', label: 'FIBER OUT', direction: 'output', signalType: 'FIBER' },
      { id: 'fiber-in', label: 'FIBER IN', direction: 'input', signalType: 'FIBER' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'mini-conv-analog-sdi',
    name: 'Mini Converter Analog to SDI',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'analog-in', label: 'ANALOG IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'mini-conv-sdi-analog',
    name: 'Mini Converter SDI to Analog',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'analog-out', label: 'ANALOG OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'mini-conv-audio-sdi',
    name: 'Mini Converter Audio to SDI',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'xlr-in', label: 'XLR IN', direction: 'input', signalType: 'XLR' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'mini-conv-sdi-audio',
    name: 'Mini Converter SDI to Audio',
    category: 'CONVERSÃO',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'xlr-out', label: 'XLR OUT', direction: 'output', signalType: 'XLR' },
    ]
  },
  {
    id: 'camera-fiber-converter',
    name: 'Camera Fiber Converter',
    category: 'FIBRA',
    color: '#2a1a4a',
    quantity: 3,
    ports: [
      { id: 'smpte-in', label: 'SMPTE IN', direction: 'input', signalType: 'FIBER' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
    ]
  },
  {
    id: 'studio-fiber-converter',
    name: 'Studio Fiber Converter',
    category: 'FIBRA',
    color: '#2a1a4a',
    quantity: 3,
    ports: [
      { id: 'smpte-out', label: 'SMPTE OUT', direction: 'output', signalType: 'FIBER' },
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'x32-rack',
    name: 'Behringer X32 Rack',
    category: 'ÁUDIO',
    color: '#1a1a3a',
    quantity: 1,
    ports: [
      { id: 'xlr-in-1', label: 'XLR IN 1', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 2', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-out-l', label: 'XLR OUT L', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-r', label: 'XLR OUT R', direction: 'output', signalType: 'XLR' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'x32-rack-dante',
    name: 'Behringer X32 Rack (Dante)',
    category: 'ÁUDIO',
    color: '#1a1a3a',
    quantity: 1,
    ports: [
      { id: 'xlr-in-1', label: 'XLR IN 1', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 2', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-out-l', label: 'XLR OUT L', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-r', label: 'XLR OUT R', direction: 'output', signalType: 'XLR' },
      { id: 'dante', label: 'DANTE', direction: 'output', signalType: 'DANTE' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'tio-1608-dante',
    name: 'TIO 1608 Dante',
    category: 'DANTE',
    color: '#1a2a3a',
    quantity: 2,
    ports: [
      { id: 'xlr-in-1', label: 'XLR IN 1', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 2', direction: 'input', signalType: 'XLR' },
      { id: 'dante-out', label: 'DANTE OUT', direction: 'output', signalType: 'DANTE' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'hyperdeck-4k-pro',
    name: 'HyperDeck Studio 4K Pro',
    category: 'GRAVAÇÃO',
    color: '#2a1a1a',
    quantity: 1,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'hyperdeck-pro-2',
    name: 'HyperDeck Studio Pro 2',
    category: 'GRAVAÇÃO',
    color: '#2a1a1a',
    quantity: 1,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'pc-vmix',
    name: 'PC vMix (DeckLink Duo 2)',
    category: 'COMPUTADOR',
    color: '#1a2a1a',
    quantity: 1,
    ports: [
      { id: 'sdi-in-1', label: 'SDI IN 1', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-2', label: 'SDI IN 2', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out-1', label: 'SDI OUT 1', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-2', label: 'SDI OUT 2', direction: 'output', signalType: 'SDI' },
      { id: 'ndi', label: 'NDI', direction: 'output', signalType: 'NDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'mac-mini-m4',
    name: 'Mac Mini M4',
    category: 'COMPUTADOR',
    color: '#1a2a1a',
    quantity: 4,
    ports: [
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
      { id: 'ndi', label: 'NDI', direction: 'output', signalType: 'NDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'atem-1me-panel',
    name: 'ATEM 1M/E Broadcast Panel',
    category: 'CONTROLO',
    color: '#2a2a1a',
    quantity: 2,
    ports: [
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'atem-camera-panel',
    name: 'ATEM Camera Control Panel',
    category: 'CONTROLO',
    color: '#2a2a1a',
    quantity: 1,
    ports: [
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'video-assist-7',
    name: 'Blackmagic Video Assist 7" 12G',
    category: 'ECRÃ',
    color: '#1a3a3a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
    ]
  },
]

export const SIGNAL_COLORS: Record<string, string> = {
  SDI: '#E8571A',
  HDMI: '#4A9EFF',
  NDI: '#00C896',
  XLR: '#B44AFF',
  FIBER: '#FFD700',
  DANTE: '#FF4A9E',
  USB: '#888888',
  ETHERNET: '#4AFFEE',
  POWER: '#FF4444',
}

export const CATEGORIES = [
  'MISTURA', 'CÂMARA', 'PTZ', 'CONVERSÃO',
  'FIBRA', 'ÁUDIO', 'DANTE', 'GRAVAÇÃO',
  'COMPUTADOR', 'CONTROLO', 'ECRÃ'
]
