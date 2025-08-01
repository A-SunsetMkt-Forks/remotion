// @ts-expect-error
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	apiSidebar: [
		'api',
		{
			type: 'category',
			label: 'Command line',
			link: {
				type: 'doc',
				id: 'cli/cli',
			},
			collapsed: true,
			items: [
				'cli/studio',
				'cli/render',
				'cli/still',
				'cli/compositions',
				'cli/bundle',
				{
					type: 'category',
					label: 'lambda',
					link: {
						type: 'doc',
						id: 'lambda/cli',
					},
					items: [
						{
							type: 'category',
							label: 'sites',
							link: {
								type: 'doc',
								id: 'lambda/cli/sites',
							},
							items: [
								'lambda/cli/sites/create',
								'lambda/cli/sites/ls',
								'lambda/cli/sites/rm',
								'lambda/cli/sites/rmall',
							],
						},
						{
							type: 'category',
							label: 'functions',
							link: {
								type: 'doc',
								id: 'lambda/cli/functions',
							},
							items: [
								'lambda/cli/functions/deploy',
								'lambda/cli/functions/ls',
								'lambda/cli/functions/rm',
								'lambda/cli/functions/rmall',
							],
						},
						'lambda/cli/render',
						'lambda/cli/still',
						'lambda/cli/policies',
						'lambda/cli/compositions',
						'lambda/cli/regions',
						'lambda/cli/quotas',
					],
				},
				{
					type: 'category',
					label: 'cloudrun',
					link: {
						type: 'doc',
						id: 'cloudrun/cli',
					},
					items: [
						{
							type: 'category',
							label: 'sites',
							link: {
								type: 'doc',
								id: 'cloudrun/cli/sites',
							},
							items: [
								'cloudrun/cli/sites/create',
								'cloudrun/cli/sites/ls',
								'cloudrun/cli/sites/rm',
								'cloudrun/cli/sites/rmall',
							],
						},
						{
							type: 'category',
							label: 'services',
							link: {
								type: 'doc',
								id: 'cloudrun/cli/services',
							},
							items: [
								'cloudrun/cli/services/deploy',
								'cloudrun/cli/services/ls',
								'cloudrun/cli/services/rm',
								'cloudrun/cli/services/rmall',
							],
						},
						'cloudrun/cli/render',
						'cloudrun/cli/still',
						'cloudrun/cli/permissions',
						'cloudrun/cli/regions',
					],
				},
				'cli/benchmark',
				{
					type: 'category',
					label: 'browser',
					link: {
						type: 'doc',
						id: 'cli/browser/index',
					},
					items: ['cli/browser/ensure'],
				},
				'cli/versions',
				'cli/upgrade',
				'cli/ffmpeg',
				'cli/ffprobe',
				'cli/gpu',
				'cli/help',
			],
		},
		'config',
		{
			type: 'html',
			value:
				'<hr style="margin-top: 4px; margin-bottom: 4px; border-bottom: none"/>', // The HTML to be rendered
			defaultStyle: true, // Use the default menu item styling
		},
		{
			type: 'category',
			label: 'remotion',
			link: {
				type: 'doc',
				id: 'remotion',
			},
			items: [
				'absolute-fill',
				'audio',
				'artifact',
				'calculate-metadata',
				'cancel-render',
				'composition',
				'continue-render',
				'delay-render',
				'easing',
				'folder',
				'freeze',
				'get-input-props',
				'get-remotion-environment',
				'getstaticfiles',
				'iframe',
				'img',
				'interpolate-colors',
				'interpolate',
				'loop',
				'measure-spring',
				'offthreadvideo',
				'animatedimage',
				'prefetch',
				'random',
				'register-root',
				'sequence',
				'series',
				'spring',
				'staticfile',
				'still',
				'use-buffer-state',
				'use-current-frame',
				'use-current-scale',
				'use-video-config',
				'version',
				'video',
				'watchstaticfile',
			],
		},

		{
			type: 'category',
			label: '@remotion/bundler',
			link: {
				type: 'doc',
				id: 'bundler',
			},
			items: ['bundle'],
		},
		{
			type: 'category',
			link: {
				type: 'doc',
				id: 'renderer',
			},
			label: '@remotion/renderer',
			items: [
				'renderer/get-compositions',
				'renderer/select-composition',
				'renderer/render-media',
				'renderer/render-frames',
				'renderer/render-still',
				'renderer/stitch-frames-to-video',
				'renderer/open-browser',
				'renderer/ensure-browser',
				'renderer/make-cancel-signal',
				'renderer/ensure-ffmpeg',
				'renderer/ensure-ffprobe',
				'renderer/get-can-extract-frames-fast',
				'renderer/get-video-metadata',
				'renderer/get-silent-parts',
				'renderer/combine-chunks',
				'renderer/extract-audio',
			],
		},
		{
			type: 'category',
			link: {
				type: 'doc',
				id: 'player/installation',
			},

			label: '@remotion/player',
			items: [
				{
					type: 'link',
					href: '/docs/player',
					label: 'Guide + Examples',
				},
				'player/api',
				'player/thumbnail',
			],
		},
		{
			type: 'category',
			label: '@remotion/gif',
			link: {
				type: 'doc',
				id: 'gif/index',
			},
			items: ['gif/gif', 'gif/get-gif-duration-in-seconds', 'gif/preload-gif'],
		},
		{
			type: 'category',
			label: '@remotion/media-utils',
			link: {
				type: 'doc',
				id: 'media-utils/index',
			},
			items: [
				'audio-buffer-to-data-url',
				'get-audio-data',
				'get-audio-duration-in-seconds',
				'get-video-metadata',
				'get-waveform-portion',
				'use-audio-data',
				'use-windowed-audio-data',
				'visualize-audio',
				'media-utils/visualize-audio-waveform',
				'media-utils/create-smooth-svg-path',
				'get-image-dimensions',
			],
		},
		{
			type: 'category',
			label: '@remotion/media-parser',
			link: {
				type: 'doc',
				id: 'media-parser/index',
			},
			items: [
				{
					type: 'link',
					href: '/docs/media-parser',
					label: 'Guide',
				},
				'media-parser/types',
				'media-parser/parse-media',
				'media-parser/download-and-parse-media',
				'media-parser/media-parser-controller',
				'media-parser/parse-media-on-web-worker',
				'media-parser/parse-media-on-server-worker',
				'media-parser/has-been-aborted',
				'media-parser/node-reader',
				'media-parser/web-reader',
				'media-parser/universal-reader',
				'media-parser/node-writer',
				'media-parser/webcodecs-timescale',
			],
		},

		{
			type: 'category',
			label: '@remotion/motion-blur',
			link: {
				type: 'doc',
				id: 'motion-blur/index',
			},
			items: [
				'motion-blur/trail',
				'motion-blur/camera-motion-blur',
				'motion-blur/common-mistake',
			],
		},
		{
			type: 'category',
			label: '@remotion/lambda',
			link: {
				type: 'doc',
				id: 'lambda/api',
			},
			items: [
				{
					type: 'link',
					href: '/docs/lambda/cli',
					label: 'CLI Reference',
				},
				'lambda/estimateprice',
				'lambda/deployfunction',
				'lambda/deletefunction',
				'lambda/getfunctioninfo',
				'lambda/getfunctions',
				'lambda/deletesite',
				'lambda/deploysite',
				'lambda/getawsclient',
				'lambda/getregions',
				'lambda/getsites',
				'lambda/downloadmedia',
				'lambda/deleterender',
				'lambda/getuserpolicy',
				'lambda/getrolepolicy',
				'lambda/getcompositionsonlambda',
				'lambda/getorcreatebucket',
				'lambda/getrenderprogress',
				'lambda/presignurl',
				'lambda/rendermediaonlambda',
				'lambda/renderstillonlambda',
				'lambda/simulatepermissions',
				'lambda/speculatefunctionname',
				'lambda/validatewebhooksignature',
				'lambda/approuterwebhook',
				'lambda/pagesrouterwebhook',
				'lambda/expresswebhook',
			],
		},
		{
			type: 'category',
			label: '@remotion/cloudrun',
			link: {
				type: 'doc',
				id: 'cloudrun/api',
			},
			items: [
				{
					type: 'link',
					href: '/docs/cloudrun/cli',
					label: 'CLI Reference',
				},
				'cloudrun/getserviceinfo',
				'cloudrun/deployservice',
				'cloudrun/deleteservice',
				'cloudrun/getservices',
				'cloudrun/speculateservicename',
				'cloudrun/getregions',
				'cloudrun/deploysite',
				'cloudrun/deletesite',
				'cloudrun/getsites',
				'cloudrun/getorcreatebucket',
				'cloudrun/rendermediaoncloudrun',
				'cloudrun/renderstilloncloudrun',
				'cloudrun/testpermissions',
			],
		},
		{
			type: 'category',
			label: '@remotion/tailwind',
			link: {
				type: 'doc',
				id: 'tailwind/tailwind',
			},
			items: ['tailwind/enable-tailwind'],
		},
		{
			type: 'category',
			label: '@remotion/tailwind-v4',
			link: {
				type: 'doc',
				id: 'tailwind-v4/overview',
			},
			items: ['tailwind-v4/enable-tailwind'],
		},
		{
			type: 'category',
			label: '@remotion/enable-scss',
			link: {
				type: 'doc',
				id: 'enable-scss/overview',
			},
			items: ['enable-scss/enable-scss'],
		},
		{
			type: 'category',
			label: '@remotion/three',
			link: {
				type: 'doc',
				id: 'three',
			},
			items: [
				'three-canvas',
				'use-video-texture',
				'use-offthread-video-texture',
			],
		},
		{
			type: 'category',
			label: '@remotion/skia',
			link: {
				type: 'doc',
				id: 'skia/skia',
			},
			items: ['skia/enable-skia', 'skia/skia-canvas'],
		},
		{
			type: 'category',
			label: '@remotion/lottie',
			link: {
				type: 'doc',
				id: 'lottie/lottie-index',
			},
			items: [
				'lottie/lottie-comp',
				'lottie/getlottiemetadata',
				'lottie/lottie-staticfile',
				'lottie/lottie-remote',
				'lottie/lottie-lottiefiles',
			],
		},
		{
			type: 'category',
			label: '@remotion/preload',
			link: {
				type: 'doc',
				id: 'preload/preload',
			},
			items: [
				'preload/preload-video',
				'preload/preload-audio',
				'preload/preload-image',
				'preload/preload-font',
				'preload/resolve-redirect',
			],
		},
		{
			type: 'category',
			label: '@remotion/paths',
			link: {
				type: 'doc',
				id: 'paths/index',
			},
			items: [
				'paths/get-length',
				'paths/get-point-at-length',
				'paths/get-tangent-at-length',
				'paths/get-instruction-index-at-length',
				'paths/reverse-path',
				'paths/normalize-path',
				'paths/interpolate-path',
				'paths/evolve-path',
				'paths/reset-path',
				'paths/get-subpaths',
				'paths/translate-path',
				'paths/warp-path',
				'paths/scale-path',
				'paths/get-bounding-box',
				'paths/extend-viewbox',
				'paths/parse-path',
				'paths/serialize-instructions',
				'paths/reduce-instructions',
				'paths/get-parts',
			],
		},
		{
			type: 'category',
			label: '@remotion/noise',
			link: {
				type: 'doc',
				id: 'noise/index',
			},
			items: ['noise/noise-2d', 'noise/noise-3d', 'noise/noise-4d'],
		},
		{
			type: 'category',
			label: '@remotion/google-fonts',
			link: {
				type: 'doc',
				id: 'google-fonts/google-fonts',
			},
			items: [
				'google-fonts/load-font',
				'google-fonts/get-available-fonts',
				'google-fonts/get-info',
				'google-fonts/load-font-from-info',
			],
		},
		{
			type: 'category',
			label: '@remotion/shapes',
			link: {
				type: 'doc',
				id: 'shapes/index',
			},
			items: [
				'shapes/rect',
				'shapes/triangle',
				'shapes/circle',
				'shapes/ellipse',
				'shapes/heart',
				'shapes/star',
				'shapes/pie',
				'shapes/polygon',
				'shapes/make-rect',
				'shapes/make-triangle',
				'shapes/make-circle',
				'shapes/make-ellipse',
				'shapes/make-heart',
				'shapes/make-star',
				'shapes/make-pie',
				'shapes/make-polygon',
			],
		},
		{
			type: 'category',
			label: '@remotion/rive',
			link: {
				type: 'doc',
				id: 'rive/index',
			},
			items: ['rive/index', 'rive/remotionrivecanvas'],
		},
		{
			type: 'category',
			label: '@remotion/studio',
			link: {
				type: 'doc',
				id: 'studio/api',
			},
			items: [
				'studio/get-static-files',
				'studio/watch-public-folder',
				'studio/watch-static-file',
				'studio/write-static-file',
				'studio/delete-static-file',
				'studio/restart-studio',
				'studio/save-default-props',
				'studio/play',
				'studio/pause',
				'studio/toggle',
				'studio/seek',
				'studio/go-to-composition',
				'studio/update-default-props',
				'studio/focus-default-props-path',
				'studio/reevaluate-composition',
				'studio/visual-control',
			],
		},
		{
			type: 'category',
			label: '@remotion/transitions',
			link: {
				type: 'doc',
				id: 'transitions/index',
			},
			items: [
				'transitions/transitionseries',
				'transitions/use-transition-progress',
				{
					type: 'category',
					label: 'Timings',
					link: {
						type: 'doc',
						id: 'transitions/timings/index',
					},
					items: [
						'transitions/timings/springtiming',
						'transitions/timings/lineartiming',
						'transitions/timings/custom',
					],
				},
				{
					type: 'category',
					label: 'Presentations',
					link: {
						type: 'doc',
						id: 'transitions/presentations/index',
					},
					items: [
						'transitions/presentations/fade',
						'transitions/presentations/slide',
						'transitions/presentations/wipe',
						'transitions/presentations/flip',
						'transitions/presentations/clock-wipe',
						'transitions/presentations/iris',
						'transitions/presentations/none',
						{
							type: 'doc',
							id: 'transitions/presentations/cube',
							className: 'pro-item',
						},
						'transitions/presentations/custom',
						'transitions/audio-transitions',
					],
				},
			],
		},
		{
			type: 'category',
			label: '@remotion/zod-types',
			link: {
				type: 'doc',
				id: 'zod-types/index',
			},
			items: [
				'zod-types/z-color',
				'zod-types/z-textarea',
				'zod-types/z-matrix',
			],
		},
		{
			type: 'category',
			label: '@remotion/layout-utils',
			link: {
				type: 'doc',
				id: 'layout-utils/index',
			},
			items: [
				'layout-utils/best-practices',
				'layout-utils/measure-text',
				'layout-utils/fill-text-box',
				'layout-utils/fit-text',
				'layout-utils/fit-text-on-n-lines',
				'layout-utils/debug',
			],
		},
		{
			type: 'category',
			label: '@remotion/animation-utils',
			link: {
				type: 'doc',
				id: 'animation-utils/index',
			},
			items: [
				'animation-utils/make-transform',
				'animation-utils/interpolate-styles',
			],
		},
		{
			type: 'category',
			label: '@remotion/animated-emoji',
			link: {
				type: 'doc',
				id: 'animated-emoji/index',
			},
			items: [
				'animated-emoji/animated-emoji',
				'animated-emoji/get-available-emoji',
			],
		},
		{
			type: 'category',
			label: '@remotion/webcodecs',
			link: {
				type: 'doc',
				id: 'webcodecs/index',
			},
			items: [
				{
					type: 'link',
					href: '/docs/webcodecs',
					label: 'Guide',
				},
				'webcodecs/convert-media',
				'webcodecs/webcodecs-controller',
				'webcodecs/get-available-containers',
				'webcodecs/can-reencode-audio-track',
				'webcodecs/can-reencode-video-track',
				'webcodecs/can-copy-audio-track',
				'webcodecs/can-copy-video-track',
				'webcodecs/default-on-audio-track-handler',
				'webcodecs/default-on-video-track-handler',
				'webcodecs/get-default-audio-codec',
				'webcodecs/get-default-video-codec',
				'webcodecs/get-available-audio-codecs',
				'webcodecs/get-available-video-codecs',
				'webcodecs/convert-audiodata',
				'webcodecs/get-partial-audio-data',
				'webcodecs/create-audio-decoder',
				'webcodecs/create-video-decoder',
				'webcodecs/extract-frames',
				'webcodecs/extract-frames-on-web-worker',
				'webcodecs/rotate-and-resize-video-frame',
				'webcodecs/web-fs-writer',
				'webcodecs/buffer-writer',
			],
		},
		{
			type: 'category',
			label: '@remotion/captions',
			link: {
				type: 'doc',
				id: 'captions/index',
			},
			items: [
				'captions/caption',
				'captions/parse-srt',
				'captions/serialize-srt',
				'captions/create-tiktok-style-captions',
			],
		},
		{
			type: 'category',
			label: '@remotion/install-whisper-cpp',
			link: {
				type: 'doc',
				id: 'install-whisper-cpp/index',
			},
			items: [
				'install-whisper-cpp/install-whisper-cpp',
				'install-whisper-cpp/download-whisper-model',
				'install-whisper-cpp/transcribe',
				'install-whisper-cpp/to-captions',
				'install-whisper-cpp/convert-to-captions',
			],
		},
		{
			type: 'category',
			label: '@remotion/whisper-web',
			link: {
				type: 'doc',
				id: 'whisper-web/index',
			},
			items: [
				'whisper-web/download-whisper-model',
				'whisper-web/transcribe',
				'whisper-web/resample-to-16khz',
				'whisper-web/can-use-whisper-web',
				'whisper-web/get-available-models',
				'whisper-web/get-loaded-models',
				'whisper-web/to-captions',
			],
		},
		{
			type: 'category',
			label: '@remotion/openai-whisper',
			link: {
				type: 'doc',
				id: 'openai-whisper/index',
			},
			items: ['openai-whisper/openai-whisper-api-to-captions'],
		},
		{
			type: 'category',
			label: '@remotion/fonts',
			link: {
				type: 'doc',
				id: 'fonts-api/fonts-api',
			},
			items: ['fonts-api/load-font'],
		},
		{
			type: 'category',
			label: '@remotion/licensing',
			link: {
				type: 'doc',
				id: 'licensing/index',
			},
			items: ['licensing/register-usage-point', 'licensing/get-usage'],
		},
		{
			type: 'category',
			label: '@remotion/video',
			link: {
				type: 'doc',
				id: 'new-video/index',
			},
			items: ['new-video/index'],
		},
	],
	mainSidebar: [
		{
			type: 'category',
			label: 'Getting started',
			items: [
				'getting-started',
				'the-fundamentals',
				'animating-properties',
				'reusability',
				'preview',
			],
		},
		{
			type: 'category',
			label: 'Designing visuals',
			items: [
				'transforms',
				'assets',
				'layers',
				'transitioning',
				'fonts',
				'measuring',
				'using-randomness',
				'noise-visualization',
				'animation-math',
			],
		},
		{
			type: 'category',
			label: 'Embedding videos',
			items: [
				'videos/index',
				'miscellaneous/snippets/align-duration',
				'videos/sequence',
				'videos/transparency',
				'video-manipulation',
				'miscellaneous/snippets/accelerated-video',
				'miscellaneous/snippets/jumpcuts',
				'miscellaneous/snippets/freeze-portions',
				'miscellaneous/snippets/hls',
				'video-vs-offthreadvideo',
			],
		},
		{
			type: 'category',
			label: 'Audio',
			link: {
				type: 'doc',
				id: 'using-audio',
			},
			items: [
				'audio/importing',
				'audio/trimming',
				'audio/delaying',
				'audio/volume',
				'audio/muting',
				'audio/speed',
				'audio/pitch',
				'audio/from-video',
				'audio/visualization',
				'audio/exporting',
				'audio/order-of-operations',
			],
		},
		{
			type: 'category',
			label: 'Parameterized videos',
			link: {
				type: 'doc',
				id: 'parameterized-rendering',
			},
			items: [
				'passing-props',
				'schemas',
				'visual-editing',
				'data-fetching',
				'dynamic-metadata',
				'props-resolution',
			],
		},

		{
			type: 'category',
			label: 'Rendering',
			link: {
				type: 'doc',
				id: 'render',
			},
			items: [
				'encoding',
				'stills',
				'scaling',
				'transparent-videos',
				'render-as-gif',
				'overlay',
				'quality',
				'dataset-render',
				'render-all',
				'miscellaneous/video-formats',
				'artifacts',
				'metadata',
				'hardware-acceleration',
			],
		},
		{
			type: 'category',
			label: 'Studio',
			items: [
				'studio/studio',
				'studio/shortcuts',
				'studio/quick-switcher',
				'studio/deploy-static',
				'studio/deploy-server',
			],
		},
		{
			type: 'category',
			label: 'Server-side rendering',
			link: {
				type: 'doc',
				id: 'ssr',
			},
			items: [
				'ssr',
				'ssr-node',
				'docker',
				'miscellaneous/linux-single-process',
				'gpu',
				'miscellaneous/cloud-gpu',
				'miscellaneous/cloud-gpu-docker',
				'compare-ssr',
				'distributed-rendering',
				'cloudflare-containers',
				'azure-container-apps',
			],
		},
		{
			type: 'category',
			link: {
				type: 'doc',
				id: 'player/index',
			},
			label: 'Player',
			items: [
				{
					type: 'link',
					href: '/docs/player/player',
					label: 'API Reference',
				},
				'player/examples',
				'player/scaling',
				'player/integration',
				'player/autoplay',
				'player/current-time',
				'troubleshooting/player-flicker',
				'player/buffer-state',
				'player/preloading',
				'player/premounting',
				'player/best-practices',
				'player/drag-and-drop/index',
				'player/custom-controls',
				'player/media-keys',
				'player/playback-issues',
			],
		},

		{
			type: 'category',
			label: 'Lambda',
			link: {
				type: 'doc',
				id: 'lambda',
			},
			items: [
				{
					type: 'link',
					href: '/docs/lambda/api',
					label: 'API Reference',
				},
				'lambda/setup',
				'lambda/authentication',
				'lambda/permissions',
				'lambda/region-selection',
				'lambda/concurrency',
				'lambda/runtime',
				'lambda/disk-size',
				'lambda/faq',
				'lambda/light-client',
				'lambda/custom-layers',
				'lambda/custom-destination',
				'lambda/checklist',
				'lambda/webhooks',
				'lambda/cost-example',
				'lambda/autodelete',
				{
					type: 'category',
					label: 'Troubleshooting',
					items: [
						'lambda/troubleshooting/debug',
						'lambda/troubleshooting/permissions',
						'lambda/troubleshooting/rate-limit',
						'lambda/troubleshooting/unrecognizedclientexception',
						'lambda/troubleshooting/bucket-disallows-acl',
						'lambda/troubleshooting/security-token',
						'lambda/troubleshooting/chrome-133-situation',
					],
				},
				{
					type: 'category',
					label: 'Using without IAM users',
					link: {
						type: 'doc',
						id: 'lambda/without-iam/index',
					},
					items: [
						'lambda/without-iam/index',
						'lambda/without-iam/example',
						'lambda/without-iam/ec2',
					],
				},
				'lambda/php',
				'lambda/go',
				'lambda/python',
				'lambda/ruby',
				'lambda/serverless-framework-integration',
				'lambda/supabase',
				'lambda/r2',
				'lambda/insights',
				'lambda/multiple-buckets',
				'lambda/how-lambda-works',
				'lambda/bucket-naming',
				'lambda/optimizing-cost',
				'lambda/optimizing-speed',
				'lambda/proxy',
				'lambda/limits',
				'lambda/changelog',
				'lambda/upgrading',
				'lambda/uninstall',
				'lambda/s3-public-access',
				'lambda/naming-convention',
			],
		},
		{
			type: 'category',
			label: 'Cloud Run',
			link: {
				type: 'doc',
				id: 'cloudrun',
			},
			items: [
				'cloudrun',
				'cloudrun/status',
				'cloudrun/setup',
				'cloudrun/permissions',
				'cloudrun/generate-env',
				'cloudrun/region-selection',
				'cloudrun/checklist',
				'cloudrun/instancecount',
				'cloudrun/multiple-buckets',
				'cloudrun/limits',
				'cloudrun/light-client',
				'cloudrun/upgrading',
				'cloudrun/uninstall',
			],
		},
		{
			type: 'category',
			label: 'Media Parser',
			link: {
				type: 'doc',
				id: 'media-parser/index',
			},
			items: [
				{
					type: 'link',
					href: '/docs/media-parser/parse-media',
					label: 'API Reference',
				},
				'media-parser/metadata',
				'media-parser/fields',
				'media-parser/samples',
				'media-parser/fast-and-slow',
				'media-parser/readers',
				'media-parser/tags',
				'media-parser/download-and-parse',
				'media-parser/workers',
				'media-parser/format-support',
				'media-parser/runtime-support',
				'media-parser/pause-resume-abort',
				'media-parser/seeking',
				'media-parser/webcodecs',
				'media-parser/foreign-file-types',
				'media-parser/stream-selection',
			],
		},
		{
			type: 'category',
			label: 'WebCodecs',
			link: {
				type: 'doc',
				id: 'webcodecs/index',
			},
			items: [
				{
					type: 'link',
					href: '/docs/webcodecs/convert-media',
					label: 'API Reference',
				},
				'webcodecs/convert-a-video',
				'webcodecs/rotate-a-video',
				'webcodecs/resize-a-video',
				'webcodecs/fix-mediarecorder-video',
				'webcodecs/resample-audio-16khz',
				'webcodecs/track-transformation',
				'webcodecs/pause-resume-abort',
				'webcodecs/telemetry',
			],
		},
		{
			type: 'category',
			label: 'Building apps',
			items: [
				'brownfield',
				'studio-into-app',
				'player-into-remotion-project',
				'video-uploads',
				'presigned-urls',
				'font-picker',
				'building-a-timeline',
				'multiple-fps',
				'angular',
				'svelte',
				'vue',
				'buy-a-video-editor',
			],
		},
		{
			type: 'category',
			label: 'AI',
			link: {
				type: 'doc',
				id: 'ai/index',
			},
			items: ['ai/bolt', 'ai/chatbot', 'ai/mcp', 'ai/system-prompt'],
		},
		{
			type: 'category',
			label: 'Tooling',
			items: [
				'tailwind',
				'env-variables',
				'webpack',
				'legacy-babel',
				'javascript',
				'third-party',
				'miscellaneous/typescript-aliases',
				'testing',
				'figma',
				'spline',
				'after-effects',
			],
		},
		{
			type: 'category',
			label: 'Troubleshooting',
			items: [
				'troubleshooting/debug-failed-render',
				'timeout',
				'target-closed',
				'media-playback-error',
				'performance',
				'webpack-dynamic-imports',
				'non-seekable-media',
				'flickering',
				'version-mismatch',
				'enametoolong',
				'slow-method-to-extract-frame',
				'wrong-composition-mount',
				'staticfile-relative-paths',
				'staticfile-remote-urls',
				'troubleshooting/background-image',
				'troubleshooting/nextjs-image',
				'troubleshooting/rosetta',
				'troubleshooting/loading-root-component',
				'troubleshooting/defaultprops-too-big',
				'troubleshooting/could-not-be-parsed-as-a-value-list',
				'troubleshooting/broken-fast-refresh',
				'troubleshooting/timed-out-page-function',
				'troubleshooting/delay-render-proxy',
				'troubleshooting/bundling-bundle',
				'troubleshooting/browser-launch',
				'troubleshooting/sigkill',
				'troubleshooting/subpixel-rendering',
				'troubleshooting/could-not-find-executable-to-run',
				'troubleshooting/stuck-render',
				'troubleshooting/no-frame-found-at-position',
				'troubleshooting/font-loading-errors',
			],
		},
		{
			type: 'category',
			label: 'Snippets',
			items: [
				'miscellaneous/snippets/different-segments-at-different-speeds',
				'miscellaneous/snippets/player-in-iframe',
				'miscellaneous/snippets/use-delay-render',
				'miscellaneous/snippets/offthread-video-while-rendering',
				'miscellaneous/snippets/combine-compositions',
			],
		},
		{
			type: 'link',
			href: '/docs/api',
			label: 'API Reference',
		},
		'upgrading',
		{
			type: 'category',
			label: 'Terminology',
			link: {
				type: 'doc',
				id: 'terminology',
			},
			items: [
				'terminology/player',
				'terminology/studio',
				'terminology/concurrency',
				'terminology/input-props',
				'terminology/cloud-run-url',
				'terminology/service-name',
				'terminology/entry-point',
				'terminology/root-file',
				'terminology/remotion-root',
				'terminology/public-dir',
				'terminology/serve-url',
				'terminology/bundle',
				'terminology/sequence',
				'terminology/composition',
			],
		},
		'resources',
		{
			type: 'category',
			label: 'Migration guides',
			items: [
				'react-19',
				'5-0-migration',
				'4-0-migration',
				'3-0-migration',
				'2-0-migration',
			],
		},
		{
			type: 'category',
			label: 'Get help',
			link: {
				type: 'doc',
				id: 'get-help',
			},
			items: [
				{
					type: 'link',
					href: '/docs/get-help',
					label: 'How to get help',
				},
				{
					type: 'link',
					href: 'https://remotion.dev/discord',
					label: 'Discord',
				},
				{
					type: 'link',
					href: 'https://remotion.dev/discord',
					label: 'GitHub Issues',
				},
				'support',
			],
		},

		{
			type: 'category',
			label: 'Miscellaneous',
			items: [
				'security',
				'chromium-flags',
				'miscellaneous/changing-temp-dir',
				'miscellaneous/chrome-headless-shell',
				'miscellaneous/linux-dependencies',
				'gl-options',
				'bun',
				'deno',
				'standalone',
				'miscellaneous/emojis',
				'miscellaneous/cross-origin-isolation',
				'media-fragments',
				'react-native',
			],
		},
		{
			type: 'category',
			label: 'FAQ',
			items: [
				'miscellaneous/render-in-browser',
				'miscellaneous/automatic-duration',
				'miscellaneous/vercel-functions',
				'miscellaneous/nextjs',
				'miscellaneous/render-on-edge',
				'miscellaneous/embed-studio',
				'miscellaneous/absolute-paths',
				'miscellaneous/live-streaming',
				'miscellaneous/parse-media-vs-get-video-metadata',
				'miscellaneous/pexels',
				'compare/motion-canvas',
			],
		},
		{
			type: 'category',
			label: 'Contributing',
			items: [
				'contributing/index',
				'contributing/feature',
				'contributing/option',
				'contributing/docs',
				'contributing/formatting',
				'contributing/bounty',
				'contributing/rust',
				'contributing/presentation',
				'authoring-packages',
				'prereleases',
				'contributing/ineligible',
			],
		},
		'license',
		'acknowledgements',
		{
			type: 'html',
			value:
				'<hr style="margin-top: 4px; margin-bottom: 4px; border-bottom: none"/>', // The HTML to be rendered
			defaultStyle: true, // Use the default menu item styling
		},
		{
			type: 'category',
			label: 'Timeline',
			className: 'pro-item',
			link: {
				type: 'doc',
				id: 'timeline/index',
			},
			items: [
				'timeline/demo',
				'timeline/setup',
				'timeline/usage',
				'timeline/faq',
				'timeline/render',
			],
		},
		{
			type: 'category',
			label: 'Editor Starter',
			className: 'wip-item',
			link: {
				type: 'doc',
				id: 'editor-starter/features',
			},
			items: [
				'editor-starter/setup',
				'editor-starter/features',
				'editor-starter/fonts',
				'editor-starter/asset-uploads',
				'editor-starter/undo-redo',
				'editor-starter/backend-routes',
				'editor-starter/features-not-included',
			],
		},
		{
			type: 'link',
			href: '/docs/recorder',
			label: 'Recorder',
		},
	],
	recorderSidebar: [
		{
			type: 'category',
			label: 'Recorder',
			items: [
				'recorder/index',
				'recorder/is-it-for-me',
				'recorder/demo',
				'recorder/setup',
				'recorder/create',
				{
					type: 'category',
					label: 'Record',
					items: [
						'recorder/record/index',
						'recorder/record/manually',
						'recorder/record/delete',
						'recorder/record/cropping',
					],
				},
				'recorder/captions',
				{
					type: 'category',
					label: 'Editing',
					collapsed: false,
					items: [
						'recorder/editing/editing',
						'recorder/editing/silence-removal',
						'recorder/editing/captions',
						'recorder/editing/layout',
						'recorder/editing/scenes',
						'recorder/editing/endcard',
						'recorder/editing/transitions',
						'recorder/editing/chapters',
						'recorder/editing/music',
						'recorder/editing/b-roll',
						'recorder/editing/cutting-clips',
						'recorder/editing/normalizing-audio',
					],
				},
				{
					type: 'category',
					label: 'Exporting',
					collapsed: false,
					items: [
						'recorder/exporting',
						'recorder/lambda-rendering',
						'recorder/exporting-subtitles',
					],
				},
				'recorder/source-control',
				'recorder/external-recordings',
				'recorder/experiments',
				{
					type: 'category',
					label: 'Troubleshooting',
					items: [
						'recorder/troubleshooting/cannot-read-properties-of-undefined',
					],
				},
				'recorder/roadmap',
				'recorder/gear',
				'recorder/our-recorder',
				'recorder/support',
			],
		},
	],
};

export default sidebars;
