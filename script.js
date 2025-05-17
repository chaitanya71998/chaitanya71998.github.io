// 3D Scenic Background with Three.js
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)

// Create floating particles
const particlesCount = 200
const geometry = new THREE.BufferGeometry()
const positions = []
for (let i = 0; i < particlesCount; i++) {
  positions.push((Math.random() - 0.5) * 60) // x
  positions.push((Math.random() - 0.5) * 60) // y
  positions.push((Math.random() - 0.5) * 60) // z
}
geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positions, 3)
)
const material = new THREE.PointsMaterial({
  color: 0x1565c0,
  size: 0.7,
  transparent: true,
  opacity: 0.7,
})
const particles = new THREE.Points(geometry, material)
scene.add(particles)

camera.position.z = 30

function animate() {
  requestAnimationFrame(animate)
  particles.rotation.y += 0.0015
  particles.rotation.x += 0.0007
  renderer.render(scene, camera)
}
animate()

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

console.log("Welcome to Chaitanya Sai Terli's Portfolio!")
