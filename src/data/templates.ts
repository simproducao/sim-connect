export const TEMPLATES = [
  {
    id: 'atem-2me-basic',
    name: 'ATEM 2ME — Setup Básico',
    description: '2 câmaras URSA + ATEM 2ME + HyperDeck + Monitor',
    nodes: [
      { id: 'n1', type: 'equipment', position: { x: 50, y: 200 }, data: { equipmentId: 'ursa-broadcast-g2', label: 'URSA G2 — CAM 1' } },
      { id: 'n2', type: 'equipment', position: { x: 50, y: 400 }, data: { equipmentId: 'ursa-broadcast-g2', label: 'URSA G2 — CAM 2' } },
      { id: 'n3', type: 'equipment', position: { x: 400, y: 280 }, data: { equipmentId: 'atem-2me-constellation', label: 'ATEM 2ME Constellation' } },
      { id: 'n4', type: 'equipment', position: { x: 750, y: 200 }, data: { equipmentId: 'hyperdeck-4k-pro', label: 'HyperDeck 4K Pro' } },
      { id: 'n5', type: 'equipment', position: { x: 750, y: 380 }, data: { equipmentId: 'video-assist-7', label: 'Video Assist 7"' } },
    ],
    edges: [
      { id: 'e1', source: 'n1', sourceHandle: 'sdi-out', target: 'n3', targetHandle: 'sdi-in-1', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 35m' } },
      { id: 'e2', source: 'n2', sourceHandle: 'sdi-out', target: 'n3', targetHandle: 'sdi-in-2', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 35m' } },
      { id: 'e3', source: 'n3', sourceHandle: 'pgm-out', target: 'n4', targetHandle: 'sdi-in', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 10m' } },
      { id: 'e4', source: 'n3', sourceHandle: 'pvw-out', target: 'n5', targetHandle: 'sdi-in', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 5m' } },
    ]
  },
  {
    id: 'conferencia-dante',
    name: 'Conferência — Dante + NDI',
    description: 'PTZ BirdDog + ATEM + X32 Dante + TIO 1608',
    nodes: [
      { id: 'n1', type: 'equipment', position: { x: 50, y: 150 }, data: { equipmentId: 'birddog-p200', label: 'BirdDog P200 — CAM 1' } },
      { id: 'n2', type: 'equipment', position: { x: 50, y: 350 }, data: { equipmentId: 'birddog-p200', label: 'BirdDog P200 — CAM 2' } },
      { id: 'n3', type: 'equipment', position: { x: 400, y: 250 }, data: { equipmentId: 'atem-2me-production', label: 'ATEM 2ME Production' } },
      { id: 'n4', type: 'equipment', position: { x: 50, y: 550 }, data: { equipmentId: 'x32-rack-dante', label: 'X32 Rack Dante' } },
      { id: 'n5', type: 'equipment', position: { x: 400, y: 550 }, data: { equipmentId: 'tio-1608-dante', label: 'TIO 1608 A' } },
      { id: 'n6', type: 'equipment', position: { x: 750, y: 250 }, data: { equipmentId: 'pc-vmix', label: 'PC vMix' } },
    ],
    edges: [
      { id: 'e1', source: 'n1', sourceHandle: 'sdi-out', target: 'n3', targetHandle: 'sdi-in-1', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 35m' } },
      { id: 'e2', source: 'n2', sourceHandle: 'sdi-out', target: 'n3', targetHandle: 'sdi-in-2', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 35m' } },
      { id: 'e3', source: 'n3', sourceHandle: 'pgm-out', target: 'n6', targetHandle: 'sdi-in-1', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 10m' } },
      { id: 'e4', source: 'n4', sourceHandle: 'dante', target: 'n5', targetHandle: 'dante-out', animated: true, style: { stroke: '#FF4A9E', strokeWidth: 2 }, data: { signalType: 'DANTE', cable: 'Ethernet CAT6' } },
    ]
  },
  {
    id: 'concerto-fibra',
    name: 'Concerto — Fibra SMPTE',
    description: 'URSA + Fibra SMPTE + ATEM + HyperDeck + X32',
    nodes: [
      { id: 'n1', type: 'equipment', position: { x: 50, y: 150 }, data: { equipmentId: 'ursa-broadcast-g2', label: 'URSA G2 — CAM 1' } },
      { id: 'n2', type: 'equipment', position: { x: 50, y: 350 }, data: { equipmentId: 'ursa-broadcast-g2', label: 'URSA G2 — CAM 2' } },
      { id: 'n3', type: 'equipment', position: { x: 50, y: 550 }, data: { equipmentId: 'ursa-broadcast-g2', label: 'URSA G2 — CAM 3' } },
      { id: 'n4', type: 'equipment', position: { x: 280, y: 150 }, data: { equipmentId: 'camera-fiber-converter', label: 'Camera Fiber 1' } },
      { id: 'n5', type: 'equipment', position: { x: 280, y: 350 }, data: { equipmentId: 'camera-fiber-converter', label: 'Camera Fiber 2' } },
      { id: 'n6', type: 'equipment', position: { x: 280, y: 550 }, data: { equipmentId: 'camera-fiber-converter', label: 'Camera Fiber 3' } },
      { id: 'n7', type: 'equipment', position: { x: 520, y: 150 }, data: { equipmentId: 'studio-fiber-converter', label: 'Studio Fiber 1' } },
      { id: 'n8', type: 'equipment', position: { x: 520, y: 350 }, data: { equipmentId: 'studio-fiber-converter', label: 'Studio Fiber 2' } },
      { id: 'n9', type: 'equipment', position: { x: 520, y: 550 }, data: { equipmentId: 'studio-fiber-converter', label: 'Studio Fiber 3' } },
      { id: 'n10', type: 'equipment', position: { x: 780, y: 300 }, data: { equipmentId: 'atem-2me-constellation', label: 'ATEM 2ME Constellation' } },
      { id: 'n11', type: 'equipment', position: { x: 1050, y: 200 }, data: { equipmentId: 'hyperdeck-4k-pro', label: 'HyperDeck 4K Pro' } },
      { id: 'n12', type: 'equipment', position: { x: 1050, y: 400 }, data: { equipmentId: 'x32-rack', label: 'X32 Rack' } },
    ],
    edges: [
      { id: 'e1', source: 'n1', sourceHandle: 'sdi-out', target: 'n4', targetHandle: 'sdi-in', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 5m' } },
      { id: 'e2', source: 'n2', sourceHandle: 'sdi-out', target: 'n5', targetHandle: 'sdi-in', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 5m' } },
      { id: 'e3', source: 'n3', sourceHandle: 'sdi-out', target: 'n6', targetHandle: 'sdi-in', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 5m' } },
      { id: 'e4', source: 'n4', sourceHandle: 'smpte-in', target: 'n7', targetHandle: 'smpte-out', animated: true, style: { stroke: '#FFD700', strokeWidth: 2 }, data: { signalType: 'FIBER', cable: 'SMPTE 200m' } },
      { id: 'e5', source: 'n5', sourceHandle: 'smpte-in', target: 'n8', targetHandle: 'smpte-out', animated: true, style: { stroke: '#FFD700', strokeWidth: 2 }, data: { signalType: 'FIBER', cable: 'SMPTE 200m' } },
      { id: 'e6', source: 'n6', sourceHandle: 'smpte-in', target: 'n9', targetHandle: 'smpte-out', animated: true, style: { stroke: '#FFD700', strokeWidth: 2 }, data: { signalType: 'FIBER', cable: 'SMPTE 200m' } },
      { id: 'e7', source: 'n7', sourceHandle: 'sdi-out', target: 'n10', targetHandle: 'sdi-in-1', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 10m' } },
      { id: 'e8', source: 'n8', sourceHandle: 'sdi-out', target: 'n10', targetHandle: 'sdi-in-2', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 10m' } },
      { id: 'e9', source: 'n9', sourceHandle: 'sdi-out', target: 'n10', targetHandle: 'sdi-in-3', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 10m' } },
      { id: 'e10', source: 'n10', sourceHandle: 'pgm-out', target: 'n11', targetHandle: 'sdi-in', animated: true, style: { stroke: '#E8571A', strokeWidth: 2 }, data: { signalType: 'SDI', cable: 'SDI 5m' } },
    ]
  }
]
