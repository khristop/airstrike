/**
 * Created by griga on 12/26/16.
 */

import {fadeInLeft} from './router.animations';

export function FadeInLeft() {
  var __ref__ = window['Reflect']

  function parseMeta(metaInformation) {
    for (var _i = 0,
           metaInformation_1 = metaInformation;
         _i < metaInformation_1.length; _i++) {

      var metadata = metaInformation_1[_i]; //metadata is @Component metadata


      // metadata.animations = [fadeInLeft()];
      // metadata.host = {'[@fadeInLeft]': ''};
      //your logic here
      // mine was metadata.styles = [builtStyles]
    }
  }

  //value represents the annotation parameter(s)
  return function (target) {
    var metaInformation = __ref__.getOwnMetadata('annotations', target);
    if (metaInformation) {
      parseMeta(metaInformation);
    }
  };
};
