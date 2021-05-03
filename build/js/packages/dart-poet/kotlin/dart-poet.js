(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dart-poet'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dart-poet'.");
    }root['dart-poet'] = factory(typeof this['dart-poet'] === 'undefined' ? {} : this['dart-poet'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toString = Kotlin.toString;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  function ArgumentWriter() {
  }
  ArgumentWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ArgumentWriter',
    interfaces: [Writable]
  };
  function ArrayWriter() {
  }
  ArrayWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ArrayWriter',
    interfaces: [Writable]
  };
  function AssignWriter() {
  }
  AssignWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AssignWriter',
    interfaces: [Writable]
  };
  function BodyWriter() {
  }
  BodyWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BodyWriter',
    interfaces: [Writable]
  };
  function ClassWriter() {
  }
  ClassWriter.prototype.build = function (builder) {
    builder(this);
  };
  ClassWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ClassWriter',
    interfaces: [Writable]
  };
  function ConstructorWriter() {
  }
  ConstructorWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ConstructorWriter',
    interfaces: [Writable]
  };
  function FieldWriter() {
  }
  FieldWriter.prototype.build = function (builder) {
    builder(this);
  };
  FieldWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FieldWriter',
    interfaces: [Writable]
  };
  function ImportWriter() {
  }
  ImportWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ImportWriter',
    interfaces: [Writable]
  };
  function InstantiateWriter() {
  }
  InstantiateWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstantiateWriter',
    interfaces: [Writable]
  };
  function LambdaWriter() {
  }
  LambdaWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LambdaWriter',
    interfaces: [Writable]
  };
  function ListWriter() {
  }
  ListWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ListWriter',
    interfaces: [Writable]
  };
  function MapWriter() {
  }
  MapWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MapWriter',
    interfaces: [Writable]
  };
  function MethodWriter() {
  }
  MethodWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MethodWriter',
    interfaces: [Writable]
  };
  function ParameterWriter() {
  }
  ParameterWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParameterWriter',
    interfaces: [Writable]
  };
  function TypeWriter() {
  }
  TypeWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TypeWriter',
    interfaces: [Writable]
  };
  function Writable() {
  }
  Writable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Writable',
    interfaces: []
  };
  function Writer() {
  }
  Writer.prototype.build = function (builder) {
    builder(this);
  };
  Writer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Writer',
    interfaces: [Writable]
  };
  function DartArgumentWriter(builder) {
    if (builder === void 0)
      builder = null;
    this.name_dk0040$_0 = null;
    this.value_9r0xig$_0 = null;
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartArgumentWriter.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_dk0040$_0;
    },
    set: function (name) {
      this.name_dk0040$_0 = name;
    }
  });
  Object.defineProperty(DartArgumentWriter.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.value_9r0xig$_0;
    },
    set: function (value) {
      this.value_9r0xig$_0 = value;
    }
  });
  DartArgumentWriter.prototype.write = function () {
    assert(this.value != null);
    var $receiver = StringBuilder_init();
    var tmp$;
    if ((tmp$ = this.name) != null) {
      $receiver.append_pdl1vj$(tmp$ + ': ');
    }$receiver.append_pdl1vj$(this.value);
    return $receiver.toString();
  };
  DartArgumentWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartArgumentWriter',
    interfaces: [ArgumentWriter]
  };
  function DartArrayWriter() {
    this._lines_0 = ArrayList_init();
  }
  DartArrayWriter.prototype.write = function () {
    return postfix(prefix(addTabs(joinToString(this._lines_0, ',\n'), true), '[\n'), ',\n]');
  };
  DartArrayWriter.prototype.add = function (adder) {
    this._lines_0.add_11rb$(adder(this));
  };
  DartArrayWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartArrayWriter',
    interfaces: [ArrayWriter]
  };
  function DartAssignWriter() {
    this.name_kn80wu$_0 = null;
    this.assign_8lkybi$_0 = null;
  }
  Object.defineProperty(DartAssignWriter.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_kn80wu$_0;
    },
    set: function (name) {
      this.name_kn80wu$_0 = name;
    }
  });
  Object.defineProperty(DartAssignWriter.prototype, 'assign', {
    configurable: true,
    get: function () {
      return this.assign_8lkybi$_0;
    },
    set: function (assign) {
      this.assign_8lkybi$_0 = assign;
    }
  });
  DartAssignWriter.prototype.build = function (builder) {
    builder(this);
  };
  DartAssignWriter.prototype.write = function () {
    assert(this.name != null);
    assert(this.assign != null);
    return toString(this.name) + ' = ' + toString(this.assign);
  };
  DartAssignWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartAssignWriter',
    interfaces: [AssignWriter]
  };
  function DartBodyWriter(builder) {
    if (builder === void 0)
      builder = null;
    this._lines_0 = ArrayList_init();
    this.returnLine_upej7o$_0 = null;
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartBodyWriter.prototype, 'returnLine', {
    configurable: true,
    get: function () {
      return this.returnLine_upej7o$_0;
    },
    set: function (returnLine) {
      this.returnLine_upej7o$_0 = returnLine;
    }
  });
  DartBodyWriter.prototype.addLine = function (line) {
    this._lines_0.add_11rb$(line);
  };
  DartBodyWriter.prototype.write = function () {
    var lines = ArrayList_init();
    if (!this._lines_0.isEmpty()) {
      var $receiver = this._lines_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item + ';');
      }
      lines.addAll_brywnq$(destination);
    }if (this.returnLine != null) {
      lines.add_11rb$('return ' + toString(this.returnLine) + ';');
    }return joinToString(lines, '\n');
  };
  DartBodyWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartBodyWriter',
    interfaces: [BodyWriter]
  };
  function DartClassWriter(builder) {
    if (builder === void 0)
      builder = null;
    this.extends_jlzddv$_0 = null;
    this.name_9fq2k3$_0 = null;
    this._fields_0 = ArrayList_init();
    this._methods_0 = ArrayList_init();
    this._constructors_0 = ArrayList_init();
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartClassWriter.prototype, 'extends', {
    configurable: true,
    get: function () {
      return this.extends_jlzddv$_0;
    },
    set: function (extends_0) {
      this.extends_jlzddv$_0 = extends_0;
    }
  });
  Object.defineProperty(DartClassWriter.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_9fq2k3$_0;
    },
    set: function (name) {
      this.name_9fq2k3$_0 = name;
    }
  });
  DartClassWriter.prototype.addField = function (builder) {
    var $receiver = this._fields_0;
    var element = new DartFieldWriter(builder);
    $receiver.add_11rb$(element);
  };
  DartClassWriter.prototype.addMethod = function (builder) {
    var $receiver = this._methods_0;
    var element = new DartMethodWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  DartClassWriter.prototype.addConstructor = function (builder) {
    var tmp$ = this._constructors_0;
    var $receiver = new DartConstructorWriter();
    builder($receiver);
    tmp$.add_11rb$($receiver);
  };
  function DartClassWriter$write$lambda$lambda(it) {
    return it.write();
  }
  function DartClassWriter$write$lambda$lambda_0(it) {
    return it.write();
  }
  function DartClassWriter$write$lambda$lambda_1(it) {
    return it.write();
  }
  DartClassWriter.prototype.write = function () {
    assert(this.name != null);
    var $receiver = StringBuilder_init();
    var value = 'class ' + toString(this.name) + ' ' + (this.extends != null ? 'extends ' + toString(this.extends) + ' ' : '') + '{';
    $receiver.append_pdl1vj$(value).append_s8itvh$(10);
    if (!this._fields_0.isEmpty()) {
      var value_0 = addTabs(joinToString(this._fields_0, '\n', void 0, void 0, void 0, void 0, DartClassWriter$write$lambda$lambda), true);
      $receiver.append_pdl1vj$(value_0).append_s8itvh$(10);
    }if (!this._constructors_0.isEmpty()) {
      $receiver.append_s8itvh$(10);
      var value_1 = addTabs(joinToString(this._constructors_0, '\n', void 0, void 0, void 0, void 0, DartClassWriter$write$lambda$lambda_0), true);
      $receiver.append_pdl1vj$(value_1).append_s8itvh$(10);
    }if (!this._methods_0.isEmpty()) {
      $receiver.append_s8itvh$(10);
      var value_2 = addTabs(joinToString(this._methods_0, '\n\n', void 0, void 0, void 0, void 0, DartClassWriter$write$lambda$lambda_1), true);
      $receiver.append_pdl1vj$(value_2).append_s8itvh$(10);
    }$receiver.append_pdl1vj$('}').append_s8itvh$(10);
    return $receiver.toString();
  };
  DartClassWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartClassWriter',
    interfaces: [ClassWriter]
  };
  function DartConstructorWriter() {
    this.className_lm9w3t$_0 = null;
    this.name_3mjt5b$_0 = null;
    this._parameters_0 = ArrayList_init();
    this._optionalParameters_0 = ArrayList_init();
    this._namedParameters_0 = ArrayList_init();
    this._assignments_0 = ArrayList_init();
    this.body_0 = null;
  }
  Object.defineProperty(DartConstructorWriter.prototype, 'className', {
    configurable: true,
    get: function () {
      return this.className_lm9w3t$_0;
    },
    set: function (className) {
      this.className_lm9w3t$_0 = className;
    }
  });
  Object.defineProperty(DartConstructorWriter.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_3mjt5b$_0;
    },
    set: function (name) {
      this.name_3mjt5b$_0 = name;
    }
  });
  DartConstructorWriter.prototype.addBody = function (builder) {
    this.body_0 = new DartBodyWriter(builder);
  };
  DartConstructorWriter.prototype.addParameter = function (builder) {
    var $receiver = this._parameters_0;
    var element = new DartParameterWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  DartConstructorWriter.prototype.addOptionalParameter = function (builder) {
    var $receiver = this._optionalParameters_0;
    var element = new DartParameterWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  DartConstructorWriter.prototype.addNamedParameter = function (builder) {
    var $receiver = this._namedParameters_0;
    var element = new DartParameterWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  DartConstructorWriter.prototype.addAssignment = function (builder) {
    var tmp$ = this._assignments_0;
    var $receiver = new DartAssignWriter();
    builder($receiver);
    tmp$.add_11rb$($receiver);
  };
  function DartConstructorWriter$write$lambda$lambda(it) {
    return it.write();
  }
  DartConstructorWriter.prototype.write = function () {
    assert(this.className != null);
    var $receiver = listOf([this.writeParameters_0(), this.writeOptionalParameters_0(), this.writeNamedParameters_0()]);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length > 0)
        destination.add_11rb$(element);
    }
    var parameters = joinToString(destination, ', ');
    var $receiver_0 = StringBuilder_init();
    $receiver_0.append_pdl1vj$(this.className);
    if (this.name != null) {
      $receiver_0.append_pdl1vj$('.' + toString(this.name));
    }$receiver_0.append_pdl1vj$('(' + parameters + ')');
    if (!this._assignments_0.isEmpty()) {
      $receiver_0.append_pdl1vj$('\n: ');
      var assignments = addTabs(joinToString(this._assignments_0, ',\n', void 0, void 0, void 0, void 0, DartConstructorWriter$write$lambda$lambda), false);
      $receiver_0.append_pdl1vj$(assignments);
    }if (this.body_0 != null) {
      $receiver_0.append_pdl1vj$('{').append_s8itvh$(10);
      var value = ensureNotNull(this.body_0).write();
      $receiver_0.append_pdl1vj$(value).append_s8itvh$(10);
      $receiver_0.append_pdl1vj$('}');
    } else {
      $receiver_0.append_pdl1vj$(';');
    }
    return $receiver_0.toString();
  };
  function DartConstructorWriter$writeParameters$lambda(it) {
    return it.write();
  }
  DartConstructorWriter.prototype.writeParameters_0 = function () {
    var tmp$;
    if (this._parameters_0.isEmpty()) {
      tmp$ = '';
    } else {
      tmp$ = joinToString(this._parameters_0, ', ', void 0, void 0, void 0, void 0, DartConstructorWriter$writeParameters$lambda);
    }
    return tmp$;
  };
  function DartConstructorWriter$writeOptionalParameters$lambda(it) {
    return it.write();
  }
  DartConstructorWriter.prototype.writeOptionalParameters_0 = function () {
    var tmp$;
    if (this._optionalParameters_0.isEmpty()) {
      tmp$ = '';
    } else {
      tmp$ = '[' + joinToString(this._optionalParameters_0, ', ', void 0, void 0, void 0, void 0, DartConstructorWriter$writeOptionalParameters$lambda) + ']';
    }
    return tmp$;
  };
  function DartConstructorWriter$writeNamedParameters$lambda(it) {
    return it.write();
  }
  DartConstructorWriter.prototype.writeNamedParameters_0 = function () {
    var tmp$;
    if (this._namedParameters_0.isEmpty()) {
      tmp$ = '';
    } else {
      tmp$ = '{' + joinToString(this._namedParameters_0, ', ', void 0, void 0, void 0, void 0, DartConstructorWriter$writeNamedParameters$lambda) + '}';
    }
    return tmp$;
  };
  DartConstructorWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartConstructorWriter',
    interfaces: [ConstructorWriter]
  };
  function DartFieldWriter(builder) {
    if (builder === void 0)
      builder = null;
    this.name_tycphr$_0 = null;
    this.type_u22uyo$_0 = null;
    this.isFinal_ykhak2$_0 = true;
    this.defaultValue_otpy16$_0 = null;
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartFieldWriter.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_tycphr$_0;
    },
    set: function (name) {
      this.name_tycphr$_0 = name;
    }
  });
  Object.defineProperty(DartFieldWriter.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.type_u22uyo$_0;
    },
    set: function (type) {
      this.type_u22uyo$_0 = type;
    }
  });
  Object.defineProperty(DartFieldWriter.prototype, 'isFinal', {
    configurable: true,
    get: function () {
      return this.isFinal_ykhak2$_0;
    },
    set: function (isFinal) {
      this.isFinal_ykhak2$_0 = isFinal;
    }
  });
  Object.defineProperty(DartFieldWriter.prototype, 'defaultValue', {
    configurable: true,
    get: function () {
      return this.defaultValue_otpy16$_0;
    },
    set: function (defaultValue) {
      this.defaultValue_otpy16$_0 = defaultValue;
    }
  });
  DartFieldWriter.prototype.write = function () {
    assert(this.name != null);
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$(this.isFinal ? 'final ' : '');
    if (this.type == null && !this.isFinal) {
      $receiver.append_pdl1vj$('var ');
    } else if (this.type != null) {
      $receiver.append_pdl1vj$(toString(this.type) + ' ');
    }$receiver.append_pdl1vj$(this.name);
    if (this.defaultValue != null) {
      $receiver.append_pdl1vj$(' = ' + toString(this.defaultValue));
    }$receiver.append_pdl1vj$(';');
    return $receiver.toString();
  };
  DartFieldWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartFieldWriter',
    interfaces: [FieldWriter]
  };
  function DartImportWriter() {
    this.importPackage_7ikr68$_0 = null;
  }
  Object.defineProperty(DartImportWriter.prototype, 'importPackage', {
    configurable: true,
    get: function () {
      return this.importPackage_7ikr68$_0;
    },
    set: function (importPackage) {
      this.importPackage_7ikr68$_0 = importPackage;
    }
  });
  DartImportWriter.prototype.write = function () {
    return 'import ' + "'" + toString(this.importPackage) + "'" + ';';
  };
  DartImportWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartImportWriter',
    interfaces: [ImportWriter]
  };
  function DartInstantiateWriter(builder) {
    if (builder === void 0)
      builder = null;
    this.name_mljrup$_0 = null;
    this._arguments_0 = ArrayList_init();
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartInstantiateWriter.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_mljrup$_0;
    },
    set: function (name) {
      this.name_mljrup$_0 = name;
    }
  });
  DartInstantiateWriter.prototype.addArgument = function (builder) {
    var $receiver = this._arguments_0;
    var element = new DartArgumentWriter(builder);
    $receiver.add_11rb$(element);
  };
  DartInstantiateWriter.prototype.write = function () {
    assert(this.name != null);
    return toString(this.name) + '(' + this.writeArguments_0() + ')';
  };
  function DartInstantiateWriter$writeArguments$lambda(it) {
    return it.write();
  }
  DartInstantiateWriter.prototype.writeArguments_0 = function () {
    var tmp$;
    if (this._arguments_0.isEmpty()) {
      tmp$ = '';
    } else {
      tmp$ = postfix(prefix(addTabs(joinToString(this._arguments_0, ',\n', void 0, void 0, void 0, void 0, DartInstantiateWriter$writeArguments$lambda), true), '\n'), ',\n');
    }
    return tmp$;
  };
  DartInstantiateWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartInstantiateWriter',
    interfaces: [InstantiateWriter]
  };
  function DartLambdaWriter(builder) {
    if (builder === void 0)
      builder = null;
    this._body_0 = null;
    this._parameters_0 = ArrayList_init();
    builder != null ? builder(this) : null;
  }
  DartLambdaWriter.prototype.addBody = function (builder) {
    this._body_0 = new DartBodyWriter(builder);
  };
  DartLambdaWriter.prototype.addParameter = function (builder) {
    var $receiver = this._parameters_0;
    var element = new DartParameterWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  function DartLambdaWriter$write$lambda$lambda(it) {
    return it.write();
  }
  DartLambdaWriter.prototype.write = function () {
    var $receiver = StringBuilder_init();
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this._parameters_0.isEmpty()) {
      tmp$ = '()';
    } else {
      tmp$ = '(' + joinToString(this._parameters_0, ', ', void 0, void 0, void 0, void 0, DartLambdaWriter$write$lambda$lambda) + ')';
    }
    $receiver.append_pdl1vj$(tmp$);
    $receiver.append_pdl1vj$(' ');
    if (this._body_0 != null) {
      tmp$_2 = '{' + '\n' + toString((tmp$_1 = (tmp$_0 = this._body_0) != null ? tmp$_0.write() : null) != null ? addTabs(tmp$_1, true) : null) + '\n' + '}';
    } else {
      tmp$_2 = '{}';
    }
    $receiver.append_pdl1vj$(tmp$_2);
    return $receiver.toString();
  };
  DartLambdaWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartLambdaWriter',
    interfaces: [LambdaWriter]
  };
  function DartListWriter() {
    this.elements_0 = ArrayList_init();
  }
  DartListWriter.prototype.addElement = function (writable) {
    this.elements_0.add_11rb$(writable);
  };
  DartListWriter.prototype.write = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('[');
    if (!this.elements_0.isEmpty()) {
      $receiver.append_s8itvh$(10);
      var tmp$;
      tmp$ = this.elements_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var value = element.write();
        $receiver.append_pdl1vj$(value).append_s8itvh$(10);
      }
    }$receiver.append_pdl1vj$(']');
    return $receiver.toString();
  };
  DartListWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartListWriter',
    interfaces: [ListWriter]
  };
  function DartMapWriter() {
    this.map_xip404$_0 = LinkedHashMap_init();
  }
  Object.defineProperty(DartMapWriter.prototype, 'map', {
    configurable: true,
    get: function () {
      return this.map_xip404$_0;
    },
    set: function (map) {
      this.map_xip404$_0 = map;
    }
  });
  DartMapWriter.prototype.addPair = function (key, value) {
    this.map.put_xwzc9p$(key, value);
  };
  DartMapWriter.prototype.write = function () {
    var tmp$;
    if (this.map.isEmpty()) {
      tmp$ = '{}';
    } else {
      var $receiver = StringBuilder_init();
      $receiver.append_pdl1vj$('{').append_s8itvh$(10);
      var $receiver_0 = this.map;
      var destination = ArrayList_init_0($receiver_0.size);
      var tmp$_0;
      tmp$_0 = $receiver_0.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination.add_11rb$;
        var key = item.key;
        var value = item.value;
        tmp$_1.call(destination, '\t' + key + ': ' + value);
      }
      var value_0 = joinToString(destination, ',\n');
      $receiver.append_pdl1vj$(value_0).append_s8itvh$(10);
      $receiver.append_pdl1vj$('}');
      tmp$ = $receiver.toString();
    }
    return tmp$;
  };
  DartMapWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartMapWriter',
    interfaces: [MapWriter]
  };
  function DartMethodWriter(name, builder) {
    if (name === void 0)
      name = null;
    if (builder === void 0)
      builder = null;
    this.name_fcp418$_0 = name;
    this.returnType_pochaj$_0 = 'void';
    this.isOverride_65koyx$_0 = false;
    this._parameters_0 = ArrayList_init();
    this._optionalParameters_0 = ArrayList_init();
    this._namedParameters_0 = ArrayList_init();
    this.body_0 = null;
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartMethodWriter.prototype, 'name', {
    get: function () {
      return this.name_fcp418$_0;
    },
    set: function (name) {
      this.name_fcp418$_0 = name;
    }
  });
  Object.defineProperty(DartMethodWriter.prototype, 'returnType', {
    configurable: true,
    get: function () {
      return this.returnType_pochaj$_0;
    },
    set: function (returnType) {
      this.returnType_pochaj$_0 = returnType;
    }
  });
  Object.defineProperty(DartMethodWriter.prototype, 'isOverride', {
    configurable: true,
    get: function () {
      return this.isOverride_65koyx$_0;
    },
    set: function (isOverride) {
      this.isOverride_65koyx$_0 = isOverride;
    }
  });
  DartMethodWriter.prototype.addBody = function (builder) {
    this.body_0 = new DartBodyWriter(builder);
  };
  DartMethodWriter.prototype.addParameter = function (builder) {
    var $receiver = this._parameters_0;
    var element = new DartParameterWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  DartMethodWriter.prototype.addOptionalParameter = function (builder) {
    var $receiver = this._optionalParameters_0;
    var element = new DartParameterWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  DartMethodWriter.prototype.addNamedParameter = function (builder) {
    var $receiver = this._namedParameters_0;
    var element = new DartParameterWriter(null, builder);
    $receiver.add_11rb$(element);
  };
  DartMethodWriter.prototype.write = function () {
    assert(this.name != null);
    var $receiver = listOf([this.writeParameters_0(), this.writeOptionalParameters_0(), this.writeNamedParameters_0()]);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length > 0)
        destination.add_11rb$(element);
    }
    var parameters = joinToString(destination, ', ');
    var $receiver_0 = StringBuilder_init();
    var tmp$_0, tmp$_1;
    if (this.isOverride) {
      var value = '@override';
      $receiver_0.append_pdl1vj$(value).append_s8itvh$(10);
    }var value_0 = toString(this.returnType) + ' ' + toString(this.name) + '(' + parameters + ') {';
    $receiver_0.append_pdl1vj$(value_0).append_s8itvh$(10);
    if (this.body_0 != null) {
      var value_1 = (tmp$_1 = (tmp$_0 = this.body_0) != null ? tmp$_0.write() : null) != null ? addTabs(tmp$_1, true) : null;
      $receiver_0.append_pdl1vj$(value_1).append_s8itvh$(10);
    }$receiver_0.append_pdl1vj$('}');
    return $receiver_0.toString();
  };
  function DartMethodWriter$writeParameters$lambda(it) {
    return it.write();
  }
  DartMethodWriter.prototype.writeParameters_0 = function () {
    var tmp$;
    if (this._parameters_0.isEmpty()) {
      tmp$ = '';
    } else {
      tmp$ = joinToString(this._parameters_0, ', ', void 0, void 0, void 0, void 0, DartMethodWriter$writeParameters$lambda);
    }
    return tmp$;
  };
  function DartMethodWriter$writeOptionalParameters$lambda(it) {
    return it.write();
  }
  DartMethodWriter.prototype.writeOptionalParameters_0 = function () {
    var tmp$;
    if (this._optionalParameters_0.isEmpty()) {
      tmp$ = '';
    } else {
      tmp$ = '[' + joinToString(this._optionalParameters_0, ', ', void 0, void 0, void 0, void 0, DartMethodWriter$writeOptionalParameters$lambda) + ']';
    }
    return tmp$;
  };
  function DartMethodWriter$writeNamedParameters$lambda(it) {
    return it.write();
  }
  DartMethodWriter.prototype.writeNamedParameters_0 = function () {
    var tmp$;
    if (this._namedParameters_0.isEmpty()) {
      tmp$ = '';
    } else {
      tmp$ = '{' + joinToString(this._namedParameters_0, ', ', void 0, void 0, void 0, void 0, DartMethodWriter$writeNamedParameters$lambda) + '}';
    }
    return tmp$;
  };
  DartMethodWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartMethodWriter',
    interfaces: [MethodWriter]
  };
  function DartParameterWriter(name, builder) {
    if (builder === void 0)
      builder = null;
    this.name_645qo2$_0 = name;
    this.type_60fl75$_0 = null;
    this.defaultValue_p48e9l$_0 = null;
    this.isInitializer_c5j8cz$_0 = false;
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartParameterWriter.prototype, 'name', {
    get: function () {
      return this.name_645qo2$_0;
    },
    set: function (name) {
      this.name_645qo2$_0 = name;
    }
  });
  Object.defineProperty(DartParameterWriter.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.type_60fl75$_0;
    },
    set: function (type) {
      this.type_60fl75$_0 = type;
    }
  });
  Object.defineProperty(DartParameterWriter.prototype, 'defaultValue', {
    configurable: true,
    get: function () {
      return this.defaultValue_p48e9l$_0;
    },
    set: function (defaultValue) {
      this.defaultValue_p48e9l$_0 = defaultValue;
    }
  });
  Object.defineProperty(DartParameterWriter.prototype, 'isInitializer', {
    configurable: true,
    get: function () {
      return this.isInitializer_c5j8cz$_0;
    },
    set: function (isInitializer) {
      this.isInitializer_c5j8cz$_0 = isInitializer;
    }
  });
  DartParameterWriter.prototype.write = function () {
    assert(this.name != null);
    var $receiver = StringBuilder_init();
    if (!this.isInitializer) {
      if (this.type != null) {
        $receiver.append_pdl1vj$(toString(this.type) + ' ');
      }} else {
      $receiver.append_pdl1vj$('this.');
    }
    $receiver.append_pdl1vj$(this.name);
    if (this.defaultValue != null) {
      $receiver.append_pdl1vj$(' = ' + toString(this.defaultValue));
    }return $receiver.toString();
  };
  DartParameterWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartParameterWriter',
    interfaces: [ParameterWriter]
  };
  function DartTypeWriter(builder) {
    if (builder === void 0)
      builder = null;
    this.name_83u2nh$_0 = null;
    this._types_0 = ArrayList_init();
    builder != null ? builder(this) : null;
  }
  Object.defineProperty(DartTypeWriter.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.name_83u2nh$_0;
    },
    set: function (name) {
      this.name_83u2nh$_0 = name;
    }
  });
  DartTypeWriter.prototype.addGenericType = function (builder) {
    var $receiver = this._types_0;
    var element = new DartTypeWriter(builder);
    $receiver.add_11rb$(element);
  };
  function DartTypeWriter$write$lambda$lambda(it) {
    return it.write();
  }
  DartTypeWriter.prototype.write = function () {
    assert(this.name != null);
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$(this.name);
    if (!this._types_0.isEmpty()) {
      $receiver.append_pdl1vj$('<' + joinToString(this._types_0, ', ', void 0, void 0, void 0, void 0, DartTypeWriter$write$lambda$lambda) + '>');
    }return $receiver.toString();
  };
  DartTypeWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartTypeWriter',
    interfaces: [TypeWriter]
  };
  function DartWriter() {
    this.classes_0 = ArrayList_init();
    this._imports_0 = ArrayList_init();
  }
  DartWriter.prototype.addClass = function (builder) {
    var $receiver = this.classes_0;
    var element = new DartClassWriter(builder);
    $receiver.add_11rb$(element);
  };
  DartWriter.prototype.addImport = function (builder) {
    var tmp$ = this._imports_0;
    var $receiver = new DartImportWriter();
    builder($receiver);
    tmp$.add_11rb$($receiver);
  };
  function DartWriter$write$lambda$lambda(it) {
    return it.write();
  }
  function DartWriter$write$lambda$lambda_0(it) {
    return it.write();
  }
  DartWriter.prototype.write = function () {
    var $receiver = StringBuilder_init();
    var value = joinToString(this._imports_0, '\n', void 0, void 0, void 0, void 0, DartWriter$write$lambda$lambda);
    $receiver.append_pdl1vj$(value).append_s8itvh$(10);
    $receiver.append_pdl1vj$(joinToString(this.classes_0, '\n\n', void 0, void 0, void 0, void 0, DartWriter$write$lambda$lambda_0));
    return $receiver.toString();
  };
  DartWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartWriter',
    interfaces: [Writer]
  };
  function assert(value) {
    if (!value) {
      throw IllegalStateException_init('Asserted value is false');
    }}
  function arrayWriter(builder) {
    var $receiver = new DartArrayWriter();
    builder($receiver);
    return $receiver.write();
  }
  function lambdaWriter(builder) {
    return (new DartLambdaWriter(builder)).write();
  }
  function instantiateWriter(builder) {
    return (new DartInstantiateWriter(builder)).write();
  }
  function typeWriter(builder) {
    return (new DartTypeWriter(builder)).write();
  }
  function assignWriter(builder) {
    var $receiver = new DartAssignWriter();
    builder($receiver);
    return $receiver.write();
  }
  function mapWriter(builder) {
    var $receiver = new DartMapWriter();
    builder($receiver);
    return $receiver.write();
  }
  function listWriter(builder) {
    var $receiver = new DartListWriter();
    builder($receiver);
    return $receiver.write();
  }
  function addTabs($receiver, hasLeadingTab) {
    if (hasLeadingTab === void 0)
      hasLeadingTab = false;
    var it = replace($receiver, '\n', '\n    ');
    var block$result;
    if (hasLeadingTab) {
      block$result = Regex_init('^').replace_x2uqeu$(it, '    ');
    } else {
      block$result = it;
    }
    return block$result;
  }
  function prefix($receiver, prefix) {
    return Regex_init('^').replace_x2uqeu$($receiver, prefix);
  }
  function postfix($receiver, postfix) {
    return Regex_init('$').replace_x2uqeu$($receiver, postfix);
  }
  function toStringValue($receiver) {
    return '"' + $receiver + '"';
  }
  _.ArgumentWriter = ArgumentWriter;
  _.ArrayWriter = ArrayWriter;
  _.AssignWriter = AssignWriter;
  _.BodyWriter = BodyWriter;
  _.ClassWriter = ClassWriter;
  _.ConstructorWriter = ConstructorWriter;
  _.FieldWriter = FieldWriter;
  _.ImportWriter = ImportWriter;
  _.InstantiateWriter = InstantiateWriter;
  _.LambdaWriter = LambdaWriter;
  _.ListWriter = ListWriter;
  _.MapWriter = MapWriter;
  _.MethodWriter = MethodWriter;
  _.ParameterWriter = ParameterWriter;
  _.TypeWriter = TypeWriter;
  _.Writable = Writable;
  _.Writer = Writer;
  _.DartArgumentWriter = DartArgumentWriter;
  _.DartArrayWriter = DartArrayWriter;
  _.DartAssignWriter = DartAssignWriter;
  _.DartBodyWriter = DartBodyWriter;
  _.DartClassWriter = DartClassWriter;
  _.DartConstructorWriter = DartConstructorWriter;
  _.DartFieldWriter = DartFieldWriter;
  _.DartImportWriter = DartImportWriter;
  _.DartInstantiateWriter = DartInstantiateWriter;
  _.DartLambdaWriter = DartLambdaWriter;
  _.DartListWriter = DartListWriter;
  _.DartMapWriter = DartMapWriter;
  _.DartMethodWriter = DartMethodWriter;
  _.DartParameterWriter = DartParameterWriter;
  _.DartTypeWriter = DartTypeWriter;
  _.DartWriter = DartWriter;
  _.assert_6taknv$ = assert;
  _.arrayWriter = arrayWriter;
  _.lambdaWriter = lambdaWriter;
  _.instantiateWriter = instantiateWriter;
  _.typeWriter = typeWriter;
  _.assignWriter = assignWriter;
  _.mapWriter = mapWriter;
  _.listWriter = listWriter;
  _.addTabs_f4dhtg$ = addTabs;
  _.prefix_rjktp$ = prefix;
  _.postfix_rjktp$ = postfix;
  _.toStringValue_pdl1vz$ = toStringValue;
  DartClassWriter.prototype.build = ClassWriter.prototype.build;
  DartFieldWriter.prototype.build = FieldWriter.prototype.build;
  DartWriter.prototype.build = Writer.prototype.build;
  Kotlin.defineModule('dart-poet', _);
  return _;
}));

//# sourceMappingURL=dart-poet.js.map
