package api

import (
	mrand "math/rand"
)

func shuffleOptions(options []Option) {
	mrand.Shuffle(len(options), func(i, j int) {
		options[i], options[j] = options[j], options[i]
	})
}
