var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    renderer.render(scene, camera);
};
render();