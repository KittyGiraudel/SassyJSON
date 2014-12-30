module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-scsslint');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({
    dir : {
      src : 'stylesheets',
      dist : 'dist'
    },
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: [
          // Decoder
          '<%= dir.src %>/decode/helpers/all/_throw.scss',
          '<%= dir.src %>/decode/helpers/all/_value.scss',
          '<%= dir.src %>/decode/helpers/map/_consume.scss',
          '<%= dir.src %>/decode/helpers/string/_find-ending-quote.scss',
          '<%= dir.src %>/decode/helpers/string/_strip-token.scss',
          '<%= dir.src %>/decode/helpers/string/_length.scss',
          '<%= dir.src %>/decode/helpers/color/_color.scss',
          '<%= dir.src %>/decode/helpers/color/_get-color-value.scss',
          '<%= dir.src %>/decode/helpers/color/_hsl.scss',
          '<%= dir.src %>/decode/helpers/color/_rgb.scss',
          '<%= dir.src %>/decode/helpers/color/_hex.scss',
          '<%= dir.src %>/decode/helpers/color/_hex-to-dec.scss',
          '<%= dir.src %>/decode/helpers/number/_pow.scss',
          '<%= dir.src %>/decode/helpers/number/_find-integer.scss',
          '<%= dir.src %>/decode/helpers/number/_find-digits.scss',
          '<%= dir.src %>/decode/helpers/number/_find-exponent.scss',
          '<%= dir.src %>/decode/types/_string.scss',
          '<%= dir.src %>/decode/types/_bool.scss',
          '<%= dir.src %>/decode/types/_null.scss',
          '<%= dir.src %>/decode/types/_number.scss',
          '<%= dir.src %>/decode/types/_list.scss',
          '<%= dir.src %>/decode/types/_map.scss',
          '<%= dir.src %>/decode/api/_json.scss',

          // Encoder
          '<%= dir.src %>/encode/helpers/_quote.scss',
          '<%= dir.src %>/encode/types/_bool.scss',
          '<%= dir.src %>/encode/types/_color.scss',
          '<%= dir.src %>/encode/types/_list.scss',
          '<%= dir.src %>/encode/types/_map.scss',
          '<%= dir.src %>/encode/types/_number.scss',
          '<%= dir.src %>/encode/types/_string.scss',
          '<%= dir.src %>/encode/types/_null.scss',
          '<%= dir.src %>/encode/mixins/_json.scss',
          '<%= dir.src %>/encode/api/_json.scss'
        ],
        dest: '<%= dir.dist %>/_<%= pkg.name %>.scss',
      },
    },

    // Sass
    sass: {
      options: {
        style: 'expanded',
        require : './lib/JsonImporter.rb',
        loadPath: ['./node_modules/bootcamp/dist', './<%= dir.src %>']
      },
      all: {
        files: {
          './tmp/all.css': './test/test.scss'
        }
      },
      decoder: {
        files: {
          './tmp/decode.css': './test/decode/test.scss'
        }
      },
      encoder: {
        files: {
          './tmp/encode.css': './test/encode/test.scss'
        }
      }
    },

    scsslint : {
      options : {
        excludeLinter : [
          'ColorKeyword',
          'NameFormat',
          'StringQuotes',
          'SpaceAfterComma',
          'Comment',
          'PropertySpelling'
        ]
      },
      all: {
        src : ['<%= dir.src %>/**/*']
      },
      decoder: {
        src : ['<%= dir.src %>/decoder/**/*']
      },
      encoder: {
        src : ['<%= dir.src %>/encoder/**/*']
      }
    },

    // Bootcamp
    bootcamp: {
      all: {
        files: {
          src: ['./tmp/all.css']
        }
      },
      decoder:{
        files: {
          src: ['./tmp/decode.css']
        }
      },
      encoder:{
        files: {
          src: ['./tmp/encode.css']
        }
      }
    },

    // Watch
    watch: {
      all: {
        files: [
                './test/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test']
      },
      decoder: {
        files: [
                './test/decode/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test:decoder']
      },
      encoder: {
        files: [
                './test/encode/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test:encode']
      }
    }
  });

  // Tasks
  grunt.registerTask('test', function (arg){
    arg = arg || "all";

    var tasks = ['scsslint', 'sass', 'bootcamp'].map(function (item){
      return item + ":" + arg;
    });


    grunt.task.run(tasks);
  });
  grunt.registerTask('dev', function (arg ){
    arg = arg || "all";

    var tasks = ['test', 'watch'].map(function (item){
      return item + ":" + arg;
    });

    grunt.task.run(tasks);
  });
  grunt.registerTask('build', ['test:all', 'concat']);
};
