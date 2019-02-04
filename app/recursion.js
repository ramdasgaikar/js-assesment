recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    let files = [];
    if (typeof dirname == undefined) {
      return files.concat(listFiles(data.subDirs, dirName));   
    }
    else {
      if (dirName == data.dirName) {
        files = data.files;
        if (data.hasOwnProperty('subDirs')) {
          return files.concat(listFiles(data.subDirs, dirName));
        }
        else {
          return files;
        }
      }
    }
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    arr = [];
    arr[0]=0;
    arr[1]=1;
    
    if (n>=2) {
        for (i=2; i<=n; i++) {
            arr[i]=arr[i-1]+arr[i-2];
        }
    }
    return arr[n];
  },
};
