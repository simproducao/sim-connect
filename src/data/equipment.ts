import { EquipmentDef } from '../types'

export const EQUIPMENT: EquipmentDef[] = [
  // ===== ATEMs =====
  {
    id: 'atem-2me-constellation',
    name: 'ATEM 2 M/E Constellation 4K',
    category: 'ATEMs',
    color: '#1a3a5c',
    quantity: 1,
    image: '/equipment/atem-2me-constellation.png',
    ports: [
      { id: 'sdi-in-1', label: 'SDI IN 1 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-2', label: 'SDI IN 2 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-3', label: 'SDI IN 3 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-4', label: 'SDI IN 4 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-5', label: 'SDI IN 5 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-6', label: 'SDI IN 6 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-7', label: 'SDI IN 7 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-8', label: 'SDI IN 8 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-9', label: 'SDI IN 9 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-10', label: 'SDI IN 10 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-11', label: 'SDI IN 11 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-12', label: 'SDI IN 12 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-13', label: 'SDI IN 13 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-14', label: 'SDI IN 14 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-15', label: 'SDI IN 15 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-16', label: 'SDI IN 16 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-17', label: 'SDI IN 17 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-18', label: 'SDI IN 18 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-19', label: 'SDI IN 19 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-20', label: 'SDI IN 20 (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out-1', label: 'SDI OUT 1 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-2', label: 'SDI OUT 2 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-3', label: 'SDI OUT 3 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-4', label: 'SDI OUT 4 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-5', label: 'SDI OUT 5 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-6', label: 'SDI OUT 6 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-7', label: 'SDI OUT 7 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-8', label: 'SDI OUT 8 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-9', label: 'SDI OUT 9 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-10', label: 'SDI OUT 10 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-11', label: 'SDI OUT 11 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-12', label: 'SDI OUT 12 (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'mv-1', label: 'MULTIVIEW 1', direction: 'output', signalType: 'SDI' },
      { id: 'mv-2', label: 'MULTIVIEW 2', direction: 'output', signalType: 'SDI' },
      { id: 'audio-in-1', label: 'AUDIO IN 1 (TRS)', direction: 'input', signalType: 'XLR' },
      { id: 'audio-in-2', label: 'AUDIO IN 2 (TRS)', direction: 'input', signalType: 'XLR' },
      { id: 'intercom', label: 'INTERCOM (XLR 5p)', direction: 'input', signalType: 'XLR' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
      { id: 'usb-c', label: 'USB-C', direction: 'output', signalType: 'USB' },
    ]
  },
  {
    id: 'atem-2me-production',
    name: 'ATEM 2 M/E Production Studio 4K',
    category: 'ATEMs',
    color: '#1a3a5c',
    quantity: 1,
    image: '/equipment/atem-2me-production.png',
    ports: [
      { id: 'sdi-in-1', label: 'SDI IN 1', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-2', label: 'SDI IN 2', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-3', label: 'SDI IN 3', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-4', label: 'SDI IN 4', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-5', label: 'SDI IN 5', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-6', label: 'SDI IN 6', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-7', label: 'SDI IN 7', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-in-8', label: 'SDI IN 8', direction: 'input', signalType: 'SDI' },
      { id: 'hdmi-in-1', label: 'HDMI IN 1', direction: 'input', signalType: 'HDMI' },
      { id: 'pgm-sdi-1', label: 'PGM SDI 1', direction: 'output', signalType: 'SDI' },
      { id: 'pgm-sdi-2', label: 'PGM SDI 2', direction: 'output', signalType: 'SDI' },
      { id: 'pgm-hdmi', label: 'PGM HDMI', direction: 'output', signalType: 'HDMI' },
      { id: 'aux-sdi', label: 'AUX SDI', direction: 'output', signalType: 'SDI' },
      { id: 'mv-sdi', label: 'MULTIVIEW SDI', direction: 'output', signalType: 'SDI' },
      { id: 'mv-hdmi', label: 'MULTIVIEW HDMI', direction: 'output', signalType: 'HDMI' },
      { id: 'xlr-in-1', label: 'XLR IN 1', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 2', direction: 'input', signalType: 'XLR' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  // ===== CÂMARA =====
  {
    id: 'ursa-broadcast-g2',
    name: 'URSA Broadcast G2',
    category: 'CÂMARA',
    color: '#1a4a2a',
    quantity: 3,
    image: '/equipment/ursa-broadcast-g2.png',
    ports: [
      { id: 'sdi-out', label: 'SDI OUT (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-mon-out', label: 'SDI MON OUT', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-in', label: 'SDI IN (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'xlr-1', label: 'XLR IN 1 (mic/line/AES)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-2', label: 'XLR IN 2 (mic/line/AES)', direction: 'input', signalType: 'XLR' },
      { id: 'usb-c', label: 'USB-C (rec)', direction: 'output', signalType: 'USB' },
    ]
  },
  {
    id: 'sony-pmw350',
    name: 'Sony PMW-350',
    category: 'CÂMARA',
    color: '#1a4a2a',
    quantity: 4,
    ports: [
      { id: 'sdi-out', label: 'HD-SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
      { id: 'xlr-1', label: 'XLR IN 1', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-2', label: 'XLR IN 2', direction: 'input', signalType: 'XLR' },
    ]
  },
  // ===== PTZ =====
  {
    id: 'birddog-p200',
    name: 'PTZ BirdDog P200',
    category: 'PTZ',
    color: '#2a3a1a',
    quantity: 3,
    ports: [
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
      { id: 'ndi', label: 'NDI (RJ45)', direction: 'output', signalType: 'NDI' },
      { id: 'ethernet', label: 'ETHERNET/PoE', direction: 'input', signalType: 'ETHERNET' },
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
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
      { id: 'ndi', label: 'NDI (RJ45)', direction: 'output', signalType: 'NDI' },
      { id: 'ethernet', label: 'ETHERNET/PoE', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  // ===== Conversores =====
  {
    id: 'decimator-md-hx',
    name: 'Decimator MD-HX',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 5,
    image: '/equipment/decimator-md-hx.png',
    ports: [
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-in', label: 'SDI IN (3G/HD/SD)', direction: 'input', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
      { id: 'sdi-out-1a', label: 'SDI OUT 1a', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-1b', label: 'SDI OUT 1b', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-2a', label: 'SDI OUT 2a', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-2b', label: 'SDI OUT 2b', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'decimator-hd',
    name: 'Decimator HD',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 5,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'lumantek-shv',
    name: 'Lumantek ez-SHV+ SDI→HDMI',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 1,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-loop', label: 'SDI LOOP OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'micro-conv-bidi',
    name: 'Micro Converter BiDi SDI/HDMI 3G',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 15,
    image: '/equipment/micro-bidi.png',
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'micro-conv-hdmi-sdi',
    name: 'Micro Converter HDMI→SDI 3G',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 4,
    ports: [
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-2', label: 'SDI OUT 2', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'micro-conv-sdi-hdmi',
    name: 'Micro Converter SDI→HDMI 3G',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 5,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-loop', label: 'SDI LOOP', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'mini-conv-optical',
    name: 'Mini Converter Optical Fiber 12G',
    category: 'Conversores',
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
    id: 'mini-conv-sdi-distribution',
    name: 'Mini Converter SDI Distribution',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out-1', label: 'SDI OUT 1', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-2', label: 'SDI OUT 2', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-3', label: 'SDI OUT 3', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-4', label: 'SDI OUT 4', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-5', label: 'SDI OUT 5', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-6', label: 'SDI OUT 6', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-7', label: 'SDI OUT 7', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-8', label: 'SDI OUT 8', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'mini-conv-updowncross',
    name: 'Mini Converter UpDownCross HD',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  {
    id: 'mini-conv-analog-sdi',
    name: 'Mini Converter Analog→SDI',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'analog-in', label: 'ANALOG IN', direction: 'input', signalType: 'HDMI' },
      { id: 'sdi-out-1', label: 'SDI OUT 1', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-out-2', label: 'SDI OUT 2', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'mini-conv-sdi-analog',
    name: 'Mini Converter SDI→Analog',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'analog-out', label: 'ANALOG OUT', direction: 'output', signalType: 'HDMI' },
      { id: 'aes-out', label: 'AES/Analog AUDIO OUT', direction: 'output', signalType: 'XLR' },
    ]
  },
  {
    id: 'mini-conv-audio-sdi',
    name: 'Mini Converter Audio→SDI',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'xlr-in', label: 'XLR/AES IN', direction: 'input', signalType: 'XLR' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
    ]
  },
  {
    id: 'mini-conv-sdi-audio',
    name: 'Mini Converter SDI→Audio',
    category: 'Conversores',
    color: '#3a2a1a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT', direction: 'output', signalType: 'SDI' },
      { id: 'xlr-out', label: 'XLR/AES OUT', direction: 'output', signalType: 'XLR' },
    ]
  },
  // ===== FIBRA =====
  {
    id: 'camera-fiber-converter',
    name: 'Camera Fiber Converter',
    category: 'FIBRA',
    color: '#2a1a4a',
    quantity: 3,
    image: '/equipment/camera-fiber.png',
    ports: [
      { id: 'smpte-in', label: 'SMPTE FIBER (304)', direction: 'input', signalType: 'FIBER' },
      { id: 'sdi-cam-in', label: 'SDI IN 12G (câmara)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-ret-out', label: 'SDI RET OUT 3G', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-ret-1', label: 'RET SDI 1 3G', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-ret-2', label: 'RET SDI 2 3G', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-ret-3', label: 'RET SDI 3 3G', direction: 'output', signalType: 'SDI' },
      { id: 'intercom-1', label: 'INTERCOM XLR 5p A', direction: 'input', signalType: 'XLR' },
      { id: 'intercom-2', label: 'INTERCOM XLR 5p B', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-1', label: 'XLR IN 1 (AES/Line/Mic)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 2 (AES/Line/Mic)', direction: 'input', signalType: 'XLR' },
    ]
  },
  {
    id: 'studio-fiber-converter',
    name: 'Studio Fiber Converter',
    category: 'FIBRA',
    color: '#2a1a4a',
    quantity: 3,
    image: '/equipment/studio-fiber.png',
    ports: [
      { id: 'smpte-out', label: 'SMPTE FIBER (304)', direction: 'output', signalType: 'FIBER' },
      { id: 'sdi-ret-1', label: 'RET SDI 1 12G', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-ret-2', label: 'RET SDI 2 12G', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-ret-3', label: 'RET SDI 3 12G', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-cam-1', label: 'CAM SDI 1 12G', direction: 'output', signalType: 'SDI' },
      { id: 'sdi-cam-2', label: 'CAM SDI 2 12G', direction: 'output', signalType: 'SDI' },
      { id: 'xlr-out-1', label: 'AUDIO XLR OUT 1', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-2', label: 'AUDIO XLR OUT 2', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-3', label: 'AUDIO XLR OUT 3', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-4', label: 'AUDIO XLR OUT 4', direction: 'output', signalType: 'XLR' },
    ]
  },
  // ===== ÁUDIO =====
  {
    id: 'x32-rack',
    name: 'Behringer X32 Rack',
    category: 'ÁUDIO',
    color: '#1a1a3a',
    quantity: 1,
    image: '/equipment/x32-rack.png',
    ports: [
      { id: 'xlr-in-1', label: 'XLR IN 1 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 2 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-3', label: 'XLR IN 3 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-4', label: 'XLR IN 4 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-out-1', label: 'XLR OUT 1', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-2', label: 'XLR OUT 2', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-7', label: 'XLR OUT 7 (Main L)', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-8', label: 'XLR OUT 8 (Main R)', direction: 'output', signalType: 'XLR' },
      { id: 'aes50-a', label: 'AES50 A (Ethercon)', direction: 'input', signalType: 'ETHERNET' },
      { id: 'aes50-b', label: 'AES50 B (Ethercon)', direction: 'input', signalType: 'ETHERNET' },
      { id: 'p16', label: 'P16 ULTRANET', direction: 'output', signalType: 'ETHERNET' },
      { id: 'ethernet', label: 'ETHERNET (remote)', direction: 'input', signalType: 'ETHERNET' },
      { id: 'usb', label: 'USB (X-USB 32ch)', direction: 'output', signalType: 'USB' },
    ]
  },
  {
    id: 'x32-rack-dante',
    name: 'Behringer X32 Rack (Dante)',
    category: 'ÁUDIO',
    color: '#1a1a3a',
    quantity: 1,
    image: '/equipment/x32-rack.png',
    ports: [
      { id: 'xlr-in-1', label: 'XLR IN 1 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 2 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-3', label: 'XLR IN 3 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-4', label: 'XLR IN 4 (mic/line)', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-out-7', label: 'XLR OUT 7 (Main L)', direction: 'output', signalType: 'XLR' },
      { id: 'xlr-out-8', label: 'XLR OUT 8 (Main R)', direction: 'output', signalType: 'XLR' },
      { id: 'aes50-a', label: 'AES50 A (Ethercon)', direction: 'input', signalType: 'ETHERNET' },
      { id: 'aes50-b', label: 'AES50 B (Ethercon)', direction: 'input', signalType: 'ETHERNET' },
      { id: 'dante-pri', label: 'DANTE PRIMARY', direction: 'output', signalType: 'DANTE' },
      { id: 'dante-sec', label: 'DANTE SECONDARY', direction: 'output', signalType: 'DANTE' },
      { id: 'ethernet', label: 'ETHERNET (remote)', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'tio-1608-dante',
    name: 'Yamaha TIO 1608-D (Dante)',
    category: 'DANTE',
    color: '#1a2a3a',
    quantity: 2,
    ports: [
      { id: 'xlr-in-1', label: 'XLR IN 1-8', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-in-2', label: 'XLR IN 9-16', direction: 'input', signalType: 'XLR' },
      { id: 'xlr-out', label: 'XLR OUT 1-8', direction: 'output', signalType: 'XLR' },
      { id: 'dante-pri', label: 'DANTE PRIMARY', direction: 'output', signalType: 'DANTE' },
      { id: 'dante-sec', label: 'DANTE SECONDARY', direction: 'output', signalType: 'DANTE' },
    ]
  },
  // ===== GRAVAÇÃO =====
  {
    id: 'hyperdeck-4k-pro',
    name: 'HyperDeck Studio 4K Pro',
    category: 'GRAVAÇÃO',
    color: '#2a1a1a',
    quantity: 1,
    image: '/equipment/hyperdeck-4k-pro.png',
    ports: [
      { id: 'sdi-in', label: 'SDI IN (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
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
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
    ]
  },
  // ===== COMPUTADOR =====
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
      { id: 'ndi', label: 'NDI (via rede)', direction: 'output', signalType: 'NDI' },
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  // ===== CONTROLO =====
  {
    id: 'atem-camera-panel',
    name: 'ATEM Camera Control Panel',
    category: 'CONTROLO',
    color: '#2a2a1a',
    quantity: 1,
    ports: [
      { id: 'ethernet-1', label: 'ETHERNET 1', direction: 'input', signalType: 'ETHERNET' },
      { id: 'ethernet-2', label: 'ETHERNET 2 (loop)', direction: 'output', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'atem-1me-panel',
    name: 'ATEM 1 M/E Broadcast Panel',
    category: 'CONTROLO',
    color: '#2a2a1a',
    quantity: 2,
    ports: [
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  {
    id: 'atem-micro-panel',
    name: 'ATEM Micro Camera Panel',
    category: 'CONTROLO',
    color: '#2a2a1a',
    quantity: 1,
    ports: [
      { id: 'ethernet', label: 'ETHERNET', direction: 'input', signalType: 'ETHERNET' },
    ]
  },
  // ===== ECRÃ =====
  {
    id: 'video-assist-7',
    name: 'Video Assist 7" 12G',
    category: 'ECRÃ',
    color: '#1a3a3a',
    quantity: 2,
    ports: [
      { id: 'sdi-in', label: 'SDI IN (12G)', direction: 'input', signalType: 'SDI' },
      { id: 'sdi-out', label: 'SDI OUT (12G)', direction: 'output', signalType: 'SDI' },
      { id: 'hdmi-in', label: 'HDMI IN', direction: 'input', signalType: 'HDMI' },
      { id: 'hdmi-out', label: 'HDMI OUT', direction: 'output', signalType: 'HDMI' },
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
  'ATEMs', 'CÂMARA', 'PTZ', 'Conversores',
  'FIBRA', 'ÁUDIO', 'DANTE', 'GRAVAÇÃO',
  'COMPUTADOR', 'CONTROLO', 'ECRÃ'
]