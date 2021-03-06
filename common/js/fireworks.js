/**
 * eqShow - v3.9.4 - 2015-06-29
 *
 *
 * Copyright (c) 2015
 * Licensed MIT <>
 */
!function () {
	window.requestAnimFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
			window.setTimeout(a, 5e3)
		}
	}
	(),
	window.fireWorks = {
		doEffect : function (a, b, c, d) {
			function e() {
				requestAnimFrame(e),
				s = f(0, 1e3),
				l.globalCompositeOperation = "destination-out",
				l.fillStyle = "rgba(0, 0, 0, 0.5)",
				l.fillRect(0, 0, o, p),
				l.globalCompositeOperation = "lighter";
				for (var a = q.length; a--; )
					q[a].draw(), q[a].update(a);
				for (var a = r.length; a--; )
					r[a].draw(), r[a].update(a);
				w >= v ? x || (q.push(new h(o / 2, p, f(0, o), f(0, p / 2))), w = 0) : w++,
				u >= t ? x && (q.push(new h(o / 2, p, m, n)), u = 0) : u++
			}
			function f(a, b) {
				return Math.random() * (b - a) + a
			}
			function g(a, b, c, d) {
				var e = a - c,
				f = b - d;
				return Math.sqrt(Math.pow(e, 2) + Math.pow(f, 2))
			}
			function h(a, b, c, d) {
				for (this.x = a, this.y = b, this.sx = a, this.sy = b, this.tx = c, this.ty = d, this.distanceToTarget = g(a, b, c, d), this.distanceTraveled = 0, this.coordinates = [], this.coordinateCount = 3; this.coordinateCount--; )
					this.coordinates.push([this.x, this.y]);
				this.angle = Math.atan2(d - b, c - a),
				this.speed = 10,
				this.acceleration = 1.05,
				this.brightness = f(50, 120)
			}
			function i(a, b) {
				for (this.x = a, this.y = b, this.coordinates = [], this.coordinateCount = 5; this.coordinateCount--; )
					this.coordinates.push([this.x, this.y]);
				this.angle = f(0, 2 * Math.PI),
				this.speed = f(1, 10),
				this.friction = .95,
				this.gravity = 1,
				this.hue = f(s - 100, s + 100),
				this.brightness = f(20, 80),
				this.alpha = 1,
				this.decay = f(.01, .015)
			}
			function j(a, b) {
				for (var c = 100; c--; )
					r.push(new i(a, b))
			}
			var k,
			l,
			m,
			n,
			o = window.innerWidth,
			p = window.innerHeight,
			q = [],
			r = [],
			s = 200,
			t = 7,
			u = 0,
			v = 20,
			w = 0,
			x = !1;
			d(eqShow, b, c),
			1 == b && eqShow.playVideo(a),
			$('<canvas id="fireworks' + b + '"></canvas>').prependTo("#page" + b).css({
				position : "absolute",
				zIndex : 1
			}),
			k = document.getElementById("fireworks" + b),
			l = k.getContext("2d"),
			k.width = o,
			k.height = p,
			e(),
			h.prototype.update = function (a) {
				this.coordinates.pop(),
				this.coordinates.unshift([this.x, this.y]),
				this.speed *= this.acceleration;
				var b = Math.cos(this.angle) * this.speed,
				c = Math.sin(this.angle) * this.speed;
				this.distanceTraveled = g(this.sx, this.sy, this.x + b, this.y + c),
				this.distanceTraveled >= this.distanceToTarget ? (j(this.tx, this.ty), q.splice(a, 1)) : (this.x += b, this.y += c)
			},
			h.prototype.draw = function () {
				l.beginPath(),
				l.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]),
				l.lineTo(this.x, this.y),
				l.strokeStyle = "hsl(" + s + ", 100%, " + this.brightness + "%)",
				l.stroke(),
				l.beginPath(),
				l.arc(this.tx, this.ty, 0, 0, 2 * Math.PI),
				l.stroke()
			},
			i.prototype.update = function (a) {
				this.coordinates.pop(),
				this.coordinates.unshift([this.x, this.y]),
				this.speed *= this.friction,
				this.x += Math.cos(this.angle) * this.speed,
				this.y += Math.sin(this.angle) * this.speed + this.gravity,
				this.alpha -= this.decay,
				this.alpha <= this.decay && r.splice(a, 1)
			},
			i.prototype.draw = function () {
				l.beginPath(),
				l.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]),
				l.lineTo(this.x, this.y),
				l.strokeStyle = "hsla(" + this.hue + ", 100%, " + this.brightness + "%, " + this.alpha + ")",
				l.stroke()
			}
		}
	}
}
();
