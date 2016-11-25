		    var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 95, window.innerWidth/window.innerHeight, 0.1, 1000 );
			camera.position.z = 5;
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight, true );
			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 'blue' } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
			
	