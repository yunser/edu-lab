import React from 'react'
import './App.css'

class App extends React.Component {

    componentDidMount() {
        let elems = [
            {
                type: 'rect',
                x: 0,
                y: 0,
                width: 300,
                height: 300,
            }
        ]
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d')

        ctx.globalCompositeOperation = 'lighter'

        // ctx.fillStyle = 'rgb(255, 0, 0, 1)'
        // ctx.arc(50, 50, 50, 0, 2 * Math.PI)
        // ctx.fill()

        // ctx.fillStyle = 'rgb(0, 255, 0, 1)'
        // ctx.beginPath()
        // ctx.arc(100, 50, 50, 0, 2 * Math.PI)
        // ctx.fill()

        // ctx.fillStyle = 'rgb(0, 0, 255, 1)'
        // ctx.beginPath()
        // ctx.arc(80, 80, 50, 0, 2 * Math.PI)
        // ctx.fill()

        let lines = [
            {
                x: 0,
                y: 0,
                x2: 100,
                y2: 100
            }
        ]

        for (let elem of elems) {

        }

        for (let line of lines) {
            ctx.fillStyle = 'rgb(0, 255, 0, 1)'
            ctx.beginPath()
            ctx.moveTo(line.x, line.y)
            ctx.lineTo(line.x2, line.y2)
            // ctx.arc(100, 50, 50, 0, 2 * Math.PI)
            // ctx.fill()
            // ctx.stroke()
        }

        // let io = {
        //     x: 300,
        //     y: 300,
        //     width: 200,
        //     height: 200
        // }
        // ctx.moveTo(line.x, line.y)
        // ctx.lineTo(line.x2, line.y2)
        ctx.fillStyle = '#09c'
        ctx.fillRect(200, 200, 200, 48)

        let img = new Image()
        img.src = '/static/slide.png'
        img.onload = () => {
            ctx.drawImage(img, 200, 248, 200, 48)
        }

        const path = 'M0,0 L100,100 L200,0';

        const pathElement = document.createElementNS('http://www.w3.org/2000/svg',"path");
        pathElement.setAttributeNS(null, 'd', path);

        // let path2d = new Path2D(path)
        ctx.beginPath()
        // ctx.stroke(path2d)
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(100, 100, 200, 0)
        // ctx.moveTo(0, 0)
        ctx.stroke()

        function getProgressPt(pt1, pt2, progress) {
            return {
                x: pt1.x + (pt2.x - pt1.x) * progress,
                y: pt1.y + (pt2.y - pt1.y) * progress,
            }
        }

        let pt1 = {
            x: 0,
            y: 0
        }
        let pt2 = {
            x: 500,
            y: 500
        }
        ctx.moveTo(pt1.x, pt1.y)
        ctx.lineTo(pt2.x, pt2.y)
        ctx.strokeStyle = '#f00'
        ctx.stroke()
        let progress = 0.3
        let target = getProgressPt(pt2, pt1, progress)
        ctx.beginPath()
        ctx.arc(target.x, target.y, 8, 0, Math.PI * 2)
        ctx.fill()
    }

    render() {
        return (
            <div className="App">
                <div className="editor-box">
                    <div className="editor">
                        <canvas id="canvas" width="800" height="800"></canvas>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
