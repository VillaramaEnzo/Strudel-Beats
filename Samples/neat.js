// @title (TBD) Work in Progress
// @by Enzo Villarama

setcpm(135/4)

_$piano: note("a4 f4 d4 e4 f4 a4").s("square")
.resonance(5).decay(0.1)
.lpf(slider(1910.4, 600, 3000))
.gain(1.1)
.rev()

$guitar: stack(
  note(`<
    [[- G] F G@0.5 F <F!3 A#>@0.5]
    [[- D#] D D#@0.5 D <D!3 A#>@0.5]
  >`).add(12),

  note("<G# <[G A#] [D# G]>>")
    .slow(2)
    .struct("1@1.5 1@1.5 1")
)
.s("gm_electric_guitar_clean:4")
.room(1)
.rsize(2)
.delay(0.1)
._pianoroll()
_$drum: stack(
  s("hh:4")
  .struct("0 1")
  .fast(4),

  s("rm")
  .struct("0 1")
  .fast(2),

  s("bd:4")
  .struct(`<
  [1 [0!3 1] [0 1] 0],
  [[0 1] [0 1 0] [ 0 1] [0 1 0]]
  >`, "<0 1>")
)._scope().bank("RolandTR505")

$bass: note("<G!2 D#4 <A#4>>".add(-24))
.s("supersaw")
.lpf(500)
.room(2)
.gain(2)
._pianoroll()