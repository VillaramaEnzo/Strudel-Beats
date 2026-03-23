setcpm(150 / 4)

const notes = "[<D6*4 E6*4 F6*4 <G6*4 A6*4>>]*2"

$: note(notes)
.sound("gm_epiano2")
.room(2)
.delay(0.5)
.attack(0.005)
.lpf(slider(608,0, 2000))
.hpf(200)
.off(1/4, x=>x.add(7))
._pianoroll()

$: note(notes)
.sound("square")
.delay(1)
.attack(0.005)
.lpf(slider(204,0, 2000))
.hpf(200)
._pianoroll()
