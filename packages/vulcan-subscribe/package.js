Package.describe({
  name: 'vulcan:subscribe',
  summary: 'Subscribe to posts, users, etc. to be notified of new activity',
  version: '1.16.7',
  git: 'https://github.com/VulcanJS/Vulcan.git',
});

Package.onUse(function(api) {
  api.use([
    'vulcan:core@=1.16.7',
    // dependencies on posts, categories are done with nested imports to reduce explicit dependencies
  ]);

  api.use(['vulcan:posts@=1.16.7', 'vulcan:comments@=1.16.7', 'vulcan:categories@=1.16.7'], {
    weak: true,
  });

  api.mainModule('lib/modules.js', ['client']);
  api.mainModule('lib/modules.js', ['server']);
});
