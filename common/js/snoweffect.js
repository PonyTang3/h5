/**
 * eqShow - v3.9.4 - 2015-06-29
 *
 *
 * Copyright (c) 2015
 * Licensed MIT <>
 */
!function ($) {
	window.snowFly = {
		doEffect : function (audioObj, pageNum, pages, callback) {
			callback(eqShow, pageNum, pages),
			1 == pageNum && eqShow.playVideo(audioObj);
			var container,
			particle,
			camera,
			scene,
			renderer,
			SCREEN_WIDTH = window.innerWidth,
			SCREEN_HEIGHT = window.innerHeight,
			mouseX = 0,
			mouseY = 0,
			particles = (window.innerWidth / 2, window.innerHeight / 2, []),
			particleImage = new Image;
			particleImage.src = CLIENT_CDN + "view/images/ParticleSmoke.png";
			var $parent = $("#page" + pageNum).parent(".main-page");
			container = $parent.get(0),
			camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1e4),
			camera.position.z = 1e3,
			scene = new THREE.Scene,
			scene.add(camera),
			renderer = new THREE.CanvasRenderer,
			renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT),
			renderer.num = pageNum;
			for (var material = new THREE.ParticleBasicMaterial({
						map : new THREE.Texture(particleImage)
					}), i = 0; 500 > i; i++)
				particle = new Particle3D(material), particle.position.x = 2e3 * Math.random() - 1e3, particle.position.y = 2e3 * Math.random() - 1e3, particle.position.z = 2e3 * Math.random() - 1e3, particle.scale.x = particle.scale.y = 1, scene.add(particle), particles.push(particle);
			var canvas = renderer.domElement;
			$(canvas).attr("id", "snowcas" + pageNum).appendTo($parent),
			$("#snowcas" + pageNum).css({
				position : "absolute",
				top : 0,
				width : "100%",
				height : "100%"
			}),
			setInterval(function () {
				for (var i = 0; i < particles.length; i++) {
					var particle = particles[i];
					with (particle.updatePhysics(), particle.position)y < -1e3 && (y += 2e3),
					x > 1e3 ? x -= 2e3 : x < -1e3 && (x += 2e3),
					z > 1e3 ? z -= 2e3 : z < -1e3 && (z += 2e3)
				}
				camera.position.x += .05 * (mouseX - camera.position.x),
				camera.position.y += .05 * (-mouseY - camera.position.y),
				camera.lookAt(scene.position),
				renderer.render(scene, camera)
			}, 1e3 / 60)
		}
	}
}
(jQuery);
