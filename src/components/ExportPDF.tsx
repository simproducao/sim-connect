import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface Connection {
  from: string
  to: string
  cable: string
  signalType: string
  notes?: string
}

export async function exportToPDF(
  projectName: string,
  canvasEl: HTMLElement,
  connections: Connection[]
) {
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const W = 297
  const H = 210

  // Fundo escuro
  pdf.setFillColor(11, 12, 15)
  pdf.rect(0, 0, W, H, 'F')

  // Logo SIM
  pdf.setTextColor(232, 87, 26)
  pdf.setFontSize(20)
  pdf.setFont('helvetica', 'bold')
  pdf.text('SIM', 15, 18)
  pdf.setTextColor(255, 255, 255)
  pdf.setFontSize(7)
  pdf.setFont('helvetica', 'normal')
  pdf.text('make it happen', 15, 24)

  // Nome do projeto
  pdf.setFontSize(13)
  pdf.setFont('helvetica', 'bold')
  pdf.setTextColor(255, 255, 255)
  pdf.text(projectName, W / 2, 18, { align: 'center' })

  // Data
  pdf.setFontSize(8)
  pdf.setFont('helvetica', 'normal')
  pdf.setTextColor(120, 120, 120)
  pdf.text(new Date().toLocaleDateString('pt-PT'), W - 15, 18, { align: 'right' })

  // Linha divisória laranja
  pdf.setDrawColor(232, 87, 26)
  pdf.setLineWidth(0.5)
  pdf.line(10, 28, W - 10, 28)

  // Screenshot do canvas
  try {
    const canvas = await html2canvas(canvasEl, {
      backgroundColor: '#0b0c0f',
      scale: 1.5,
      useCORS: true
    })
    const imgData = canvas.toDataURL('image/png')
    pdf.addImage(imgData, 'PNG', 10, 32, W - 20, 95)
  } catch (e) {
    console.error('Canvas export error:', e)
  }

  // Título tabela
  const tableY = 133
  pdf.setFontSize(8)
  pdf.setFont('helvetica', 'bold')
  pdf.setTextColor(232, 87, 26)
  pdf.text('LISTA DE LIGAÇÕES', 10, tableY)

  // Cabeçalho tabela
  const headers = ['DE', 'PARA', 'TIPO', 'CABO', 'NOTAS']
  const colW = [55, 55, 25, 45, 50]
  let x = 10
  pdf.setFontSize(7)
  pdf.setTextColor(255, 255, 255)
  headers.forEach((h, i) => {
    pdf.setFont('helvetica', 'bold')
    pdf.text(h, x, tableY + 8)
    x += colW[i]
  })

  pdf.setDrawColor(60, 60, 60)
  pdf.setLineWidth(0.3)
  pdf.line(10, tableY + 10, W - 10, tableY + 10)

  // Linhas da tabela
  connections.forEach((conn, idx) => {
    const y = tableY + 16 + idx * 6
    if (y > H - 10) return
    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(180, 180, 180)
    let cx = 10
    const row = [conn.from, conn.to, conn.signalType, conn.cable, conn.notes || '—']
    row.forEach((cell, i) => {
      pdf.text(cell.substring(0, 30), cx, y)
      cx += colW[i]
    })
  })

  // Rodapé
  pdf.setFontSize(7)
  pdf.setTextColor(60, 60, 60)
  pdf.text('SIM — Signal Diagram · sim.pt', W / 2, H - 4, { align: 'center' })

  pdf.save(`SIM-Connect_${projectName.replace(/\s/g, '_')}.pdf`)
}
