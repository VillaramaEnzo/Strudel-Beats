setcpm(90/4)

$kick: s("bd!4:6")
.room(1)
._scope()

$sd: s("- sd:4 - sd:4")
._scope()


$bass: n("<a1 a2 a2 a2 a1 a2 c3 a2>*16")
.s("supersaw")
.scale("A:minor")
.orbit(2)
._punchcard()

$chords: chord("<Am F Dm@2>*2")
.sound("gm_synth_brass_1")
.voicing()
.gain(.4)
.orbit(2)
._punchcard()

$juice: n("<a f d d>*2")
.s("supersaw")
.scale("A:minor")
.orbit(2)
.dist(1)
.trans(-24)
._punchcard()