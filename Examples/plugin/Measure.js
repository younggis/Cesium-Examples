(function () {
    "use strict";

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e, t
    }
    Object.defineProperty(Cesium, "__esModule", {
        value: !0
    }),
        Cesium.Measure = void 0;
    var 
        l = i(16),
        u = i(7),
        c = a(u),
        d = i(12),
        h = i(15),
        f = a(h),
        p = i(4),
        m = i(1),


        g = function (e) {
            function t(e) {
                h(), x = "length", e = e || {}, e.type = x, e.hasOwnProperty("terrain") || (e.terrain = !0), E.start(e)
            }

            function i(e) {
                h(), x = "section", e = e || {}, e.type = x, e.terrain = !0, E.start(e)
            }

            function a(e) {
                h(), x = "area", e = e || {}, e.type = x, S.start(e)
            }

            function n(e) {
                h(), x = "volume", e = e || {}, e.type = x, D.start(e)
            }

            function o(e) {
                h(), e = e || {}, e.hasOwnProperty("isSuper") && !e.isSuper ? (x = "height", e.type = x, T.start(e)) : (x = "super_height", e.type = x, k.start(e))
            }

            function u(e) {
                h(), x = "angle", e = e || {}, e.type = x, O.start(e)
            }

            function h() {
                E.clearLastNoEnd(), S.clearLastNoEnd(), D.clearLastNoEnd(), T.clearLastNoEnd(), k.clearLastNoEnd(), O.clearLastNoEnd(), P.stopDraw()
            }

            function g() {
                x = "", h(), P.deleteAll()
            }

            function v(e, t) {
                var i = M.entities.values;
                for (var a in i) {
                    var n = i[a];
                    if (n.label && n.isMarsMeasureLabel && n.attribute && n.attribute.value) {
                        if (n.attribute.type != e) continue;
                        "area" == e ? n.label.text._value = (n.attribute.textEx || "") + y(n.attribute.value, t) : n._label.text._value = (n.attribute.textEx || "") + w(n.attribute.value, t)
                    }
                }
            }

            function y(e, t) {
                if (null == e) return "";
                null != t && "auto" != t || (t = e < 1e6 ? "m" : "km");
                var i = "";
                switch (t) {
                    default:
                    case "m":
                        i = e.toFixed(2) + "平方米";
                        break;
                    case "km":
                        i = (e / 1e6).toFixed(2) + "平方公里";
                        break;
                    case "mu":
                        i = (.0015 * e).toFixed(2) + "亩";
                        break;
                    case "ha":
                        i = (1e-4 * e).toFixed(2) + "公顷"
                }
                return i
            }

            function w(e, t) {
                if (null == e) return "";
                null != t && "auto" != t || (t = e < 1e3 ? "m" : "km");
                var i = "";
                switch (t) {
                    default:
                    case "m":
                        i = e.toFixed(2) + "米";
                        break;
                    case "km":
                        i = (.001 * e).toFixed(2) + "公里";
                        break;
                    case "mile":
                        i = (54e-5 * e).toFixed(2) + "海里";
                        break;
                    case "zhang":
                        i = (.3 * e).toFixed(2) + "丈"
                }
                return i
            }
            var _ = e.viewer,
                b = {
                    color: "#ffffff",
                    font_family: "楷体",
                    font_size: 20,
                    border: !0,
                    border_color: "#000000",
                    border_width: 3,
                    background: !0,
                    background_color: "#000000",
                    background_opacity: .5,
                    scaleByDistance: !0,
                    scaleByDistance_far: 8e5,
                    scaleByDistance_farValue: .5,
                    scaleByDistance_near: 1e3,
                    scaleByDistance_nearValue: 1,
                    pixelOffset: [0, -15],
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                };
            if (e.label)
                for (var C in e.label) b[C] = e.label[C];
            var x = "",
                P = new l.Draw(_, {
                    hasEdit: !1,
                    removeScreenSpaceEvent: e.removeScreenSpaceEvent
                });
            P.on(c.DrawAddPoint, function (e) {
                var t = e.entity;
                switch (x) {
                    case "length":
                    case "section":
                        E.showAddPointLength(t);
                        break;
                    case "area":
                        S.showAddPointLength(t);
                        break;
                    case "volume":
                        D.showAddPointLength(t);
                        break;
                    case "height":
                        T.showAddPointLength(t);
                        break;
                    case "super_height":
                        k.showAddPointLength(t);
                        break;
                    case "angle":
                        O.showAddPointLength(t)
                }
            }), P.on(c.DrawRemovePoint, function (e) {
                switch (x) {
                    case "length":
                    case "section":
                        E.showRemoveLastPointLength(e);
                        break;
                    case "area":
                        S.showRemoveLastPointLength(e);
                        break;
                    case "volume":
                        D.showRemoveLastPointLength(e);
                        break;
                    case "height":
                        T.showRemoveLastPointLength(e);
                        break;
                    case "super_height":
                        k.showRemoveLastPointLength(e);
                        break;
                    case "angle":
                        O.showRemoveLastPointLength(e)
                }
            }), P.on(c.DrawMouseMove, function (e) {
                var t = e.entity;
                switch (x) {
                    case "length":
                    case "section":
                        E.showMoveDrawing(t);
                        break;
                    case "area":
                        S.showMoveDrawing(t);
                        break;
                    case "volume":
                        D.showMoveDrawing(t);
                        break;
                    case "height":
                        T.showMoveDrawing(t);
                        break;
                    case "super_height":
                        k.showMoveDrawing(t);
                        break;
                    case "angle":
                        O.showMoveDrawing(t)
                }
            }), P.on(c.DrawCreated, function (e) {
                var t = e.entity;
                switch (x) {
                    case "length":
                    case "section":
                        E.showDrawEnd(t);
                        break;
                    case "area":
                        S.showDrawEnd(t);
                        break;
                    case "volume":
                        D.showDrawEnd(t);
                        break;
                    case "height":
                        T.showDrawEnd(t);
                        break;
                    case "super_height":
                        k.showDrawEnd(t);
                        break;
                    case "angle":
                        O.showDrawEnd(t)
                }
            });
            var M = P.getDataSource(),
                E = {
                    options: null,
                    arrLables: [],
                    totalLable: null,
                    disTerrainScale: 1.2,
                    clearLastNoEnd: function () {
                        if (null != this.totalLable && M.entities.remove(this.totalLable), this.arrLables && this.arrLables.length > 0) {
                            var e = this.arrLables;
                            if (e && e.length > 0)
                                for (var t in e) M.entities.remove(e[t])
                        }
                        this.totalLable = null, this.arrLables = []
                    },
                    start: function (e) {
                        this.options = e;
                        var t = (0, d.style2Entity)(b, {
                            horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            show: !1
                        });
                        this.totalLable = M.entities.add({
                            label: t,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        }), this.arrLables = [], P.startDraw({
                            type: "polyline",
                            config: {
                                addHeight: e.addHeight
                            },
                            style: e.style || {
                                lineType: "glow",
                                color: "#ebe12c",
                                width: 9,
                                glowPower: .1,
                                clampToGround: "section" == this.options.type || this.options.terrain
                            }
                        })
                    },
                    showAddPointLength: function (e) {
                        var t = P.getPositions(e),
                            i = (0, d.style2Entity)(b, {
                                horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                                show: !0
                            }),
                            a = M.entities.add({
                                position: t[t.length - 1],
                                label: i,
                                isMarsMeasureLabel: !0,
                                _noMousePosition: !0,
                                attribute: {
                                    unit: this.options.unit,
                                    type: this.options.type
                                }
                            });
                        if (1 == t.length) a.label.text = "起点";
                        else {
                            var n = this.getLength(t),
                                o = w(n, this.options.unit);
                            a.label.text = o, a.attribute.value = n, this.getLength([t[t.length - 2], t[t.length - 1]]) < 5 && (a.show = !1)
                        }
                        this.arrLables.push(a)
                    },
                    showRemoveLastPointLength: function (e) {
                        var t = this.arrLables.pop();
                        M.entities.remove(t), this.showMoveDrawing(e.entity), this.totalLable.position = e.position
                    },
                    showMoveDrawing: function (e) {
                        var t = P.getPositions(e);
                        if (t.length < 2) return void (this.totalLable.label.show = !1);
                        var i = this.getLength(t),
                            a = w(i, this.options.unit);
                        this.totalLable.position = t[t.length - 1], this.totalLable.label.text = "总长:" + a, this.totalLable.label.show = !0, this.totalLable.attribute.value = i, this.totalLable.attribute.textEx = "总长:", this.options.calback && this.options.calback(a, i)
                    },
                    showDrawEnd: function (e) {
                        var t = P.getPositions(e),
                            i = this.arrLables.length - t.length;
                        if (i >= 0) {
                            for (var a = this.arrLables.length - 1; a >= t.length - 1; a--) M.entities.remove(this.arrLables[a]);
                            this.arrLables.splice(t.length - 1, i + 1)
                        }
                        e._totalLable = this.totalLable, e._arrLables = this.arrLables, this.totalLable = null, this.arrLables = [], null != e.polyline && ("section" == this.options.type ? this.updateSectionForTerrain(e) : this.options.terrain && this.updateLengthForTerrain(e))
                    },
                    updateLengthForTerrain: function (e) {
                        function t() {
                            if (++s >= a.length && r) {
                                var e = w(l, o);
                                return r.label.text = "总长:" + e, r.attribute.value = l, void (i.options.calback && i.options.calback(e, l))
                            }
                            var u = [a[s - 1], a[s]];
                            (0, p.terrainPolyline)({
                                viewer: _,
                                positions: u,
                                calback: function (e, a) {
                                    var r = i.getLength(e);
                                    a && (r *= i.disTerrainScale);
                                    var u = n[s];
                                    if (u) {
                                        var c = w(r, o);
                                        u.label.text = c, u.attribute.value = r
                                    }
                                    l += r, t()
                                }
                            })
                        }
                        var i = this,
                            a = e.polyline.positions.getValue(),
                            n = e._arrLables,
                            r = e._totalLable,
                            o = r && r.unit,
                            s = 0,
                            l = 0;
                        t()
                    },
                    updateSectionForTerrain: function (e) {
                        function t() {
                            s++;
                            var e = [i[s - 1], i[s]];
                            (0, p.terrainPolyline)({
                                viewer: _,
                                positions: e,
                                calback: function (p, v) {
                                    l = v ? 1 == s ? l.concat(e) : l.concat([i[s]]) : l.concat(p);
                                    for (var y = Cesium.Cartographic.fromCartesian(i[s - 1]).height, _ = Cesium.Cartographic.fromCartesian(i[s]).height, b = (_ - y) / p.length, C = 0; C < p.length; C++) {
                                        0 != C && (u += Cesium.Cartesian3.distance(p[C], p[C - 1])), c.push(Number(u.toFixed(1)));
                                        var x = (0, m.formatPositon)(p[C]);
                                        d.push(x.z), f.push(x);
                                        var P = Number((y + b * C).toFixed(1));
                                        h.push(P)
                                    }
                                    if (s >= i.length - 1) {
                                        if (n) {
                                            var M = g.getLength(l),
                                                E = w(M, o);
                                            n.label.text = "总长:" + E, n.attribute.value = M
                                        }
                                        g.options.calback && g.options.calback({
                                            distancestr: E,
                                            distance: M,
                                            arrLen: c,
                                            arrLX: h,
                                            arrHB: d,
                                            arrPoint: f
                                        })
                                    } else {
                                        var M = g.getLength(p),
                                            E = w(M, o),
                                            S = a[s];
                                        S.label.text = E, S.attribute.value = M, t()
                                    }
                                }
                            })
                        }
                        var i = e.polyline.positions.getValue();
                        if (!(i.length < 2)) {
                            var a = e._arrLables,
                                n = e._totalLable,
                                o = n && n.unit,
                                s = 0,
                                l = [],
                                u = 0,
                                c = [],
                                d = [],
                                h = [],
                                f = [],
                                g = this;
                            t()
                        }
                    },
                    getLength: function (e) {
                        for (var t = 0, i = 0, a = e.length - 1; i < a; i++) t += Cesium.Cartesian3.distance(e[i], e[i + 1]);
                        return t
                    }
                },
                S = {
                    options: null,
                    totalLable: null,
                    clearLastNoEnd: function () {
                        null != this.totalLable && M.entities.remove(this.totalLable), this.totalLable = null
                    },
                    start: function (e) {
                        this.options = e;
                        var t = (0, d.style2Entity)(b, {
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            show: !1
                        });
                        this.totalLable = M.entities.add({
                            label: t,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        }), P.startDraw({
                            type: "polygon",
                            style: e.style || {
                                color: "#00fff2",
                                outline: !0,
                                outlineColor: "#fafa5a",
                                outlineWidth: 1,
                                opacity: .4,
                                clampToGround: !0
                            }
                        })
                    },
                    showAddPointLength: function (e) { },
                    showRemoveLastPointLength: function (e) {
                        P.getPositions(e.entity).length < 3 && (this.totalLable.label.show = !1)
                    },
                    showMoveDrawing: function (e) {
                        var t = P.getPositions(e);
                        if (t.length < 3) return void (this.totalLable.label.show = !1);
                        var i = f.toGeoJSON(e),
                            a = turf.area(i),
                            n = y(a, this.options.unit),
                            r = (0, m.centerOfMass)(t);
                        this.totalLable.position = r, this.totalLable.label.text = "面积:" + n, this.totalLable.label.show = !0, this.totalLable.attribute.value = a, this.totalLable.attribute.textEx = "面积:", this.options.calback && this.options.calback(n, a)
                    },
                    showDrawEnd: function (e) {
                        if (null != e.polygon) {
                            for (var t = e.polygon.hierarchy.getValue(), i = 0, a = t.length; i < a; i++) t[i].z = t[i].z + 1;
                            e._totalLable = this.totalLable, this.totalLable = null
                        }
                    }
                },
                D = {
                    options: null,
                    totalLable: null,
                    prevEntity: null,
                    clearLastNoEnd: function () {
                        null != this.totalLable && M.entities.remove(this.totalLable), this.totalLable = null, null != this.prevEntity && M.entities.remove(this.prevEntity), this.prevEntity = null
                    },
                    start: function (e) {
                        this.options = e;
                        var t = (0, d.style2Entity)(b, {
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            show: !1
                        });
                        this.totalLable = M.entities.add({
                            label: t,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        }), P.startDraw({
                            type: "polygon",
                            style: e.style || {
                                color: "#00fff2",
                                outline: !0,
                                outlineColor: "#fafa5a",
                                outlineWidth: 1,
                                opacity: .4,
                                clampToGround: !0
                            }
                        })
                    },
                    showAddPointLength: function (e) { },
                    showRemoveLastPointLength: function (e) { },
                    showMoveDrawing: function (e) { },
                    showDrawEnd: function (e) {
                        if (null != e.polygon) {
                            var t = e.polygon.hierarchy.getValue(),
                                i = this.computeCutVolume(t),
                                a = i.maxHeight,
                                n = i.totalCutVolume,
                                o = n.toFixed(2) + "立方米",
                                s = (0, m.centerOfMass)(t, a + 10);
                            this.totalLable.position = s, this.totalLable.label.text = "挖方体积:" + o, this.totalLable.label.show = !0, this.totalLable.attribute.value = n, this.totalLable.attribute.textEx = "挖方体积:", this.options.calback && this.options.calback(areastr, n), M.entities.remove(e), e = M.entities.add({
                                polygon: {
                                    hierarchy: {
                                        positions: t
                                    },
                                    extrudedHeight: a,
                                    closeTop: !1,
                                    closeBottom: !1,
                                    material: new Cesium.Color.fromCssColorString("#00fff2").withAlpha(.5),
                                    outline: !0,
                                    outlineColor: new Cesium.Color.fromCssColorString("#fafa5a").withAlpha(.4),
                                    outlineWidth: 1
                                }
                            }), e._totalLable = this.totalLable, this.totalLable = null
                        }
                    },
                    computeCutVolume: function (e) {
                        for (var t = 15e3, i = 0; i < e.length; i++) {
                            var a = Cesium.Cartographic.fromCartesian(e[i]),
                                n = _.scene.globe.getHeight(a);
                            t > n && (t = n)
                        }
                        var o = Math.PI / Math.pow(2, 11);
                        o /= 64;
                        for (var s, l, u, c, d, h, f, p, m, g, a, v, y = new Cesium.PolygonGeometry.fromPositions({
                            positions: e,
                            vertexFormat: Cesium.PerInstanceColorAppearance.FLAT_VERTEX_FORMAT,
                            granularity: o
                        }), w = new Cesium.PolygonGeometry.createGeometry(y), b = 0, C = 0, i = 0; i < w.indices.length; i += 3) {
                            s = w.indices[i], l = w.indices[i + 1], u = w.indices[i + 2], g = new Cesium.Cartesian3(w.attributes.position.values[3 * s], w.attributes.position.values[3 * s + 1], w.attributes.position.values[3 * s + 2]), a = Cesium.Cartographic.fromCartesian(g), c = _.scene.globe.getHeight(a), f = Cesium.Cartesian3.fromRadians(a.longitude, a.latitude, 0), C < c && (C = c), g = new Cesium.Cartesian3(w.attributes.position.values[3 * l], w.attributes.position.values[3 * l + 1], w.attributes.position.values[3 * l + 2]), a = Cesium.Cartographic.fromCartesian(g), d = _.scene.globe.getHeight(a);
                            var p = Cesium.Cartesian3.fromRadians(a.longitude, a.latitude, 0);
                            C < d && (C = d), g = new Cesium.Cartesian3(w.attributes.position.values[3 * u], w.attributes.position.values[3 * u + 1], w.attributes.position.values[3 * u + 2]), a = Cesium.Cartographic.fromCartesian(g), h = _.scene.globe.getHeight(a), m = Cesium.Cartesian3.fromRadians(a.longitude, a.latitude, 0), C < h && (C = h), v = this.computeAreaOfTriangle(f, p, m), b += v * (c - t + d - t + h - t) / 3
                        }
                        return {
                            maxHeight: C,
                            totalCutVolume: b
                        }
                    },
                    computeAreaOfTriangle: function (e, t, i) {
                        var a = Cesium.Cartesian3.distance(e, t),
                            n = Cesium.Cartesian3.distance(t, i),
                            o = Cesium.Cartesian3.distance(i, e),
                            s = (a + n + o) / 2;
                        return Math.sqrt(s * (s - a) * (s - n) * (s - o))
                    }
                },
                T = {
                    options: null,
                    totalLable: null,
                    clearLastNoEnd: function () {
                        null != this.totalLable && M.entities.remove(this.totalLable), this.totalLable = null
                    },
                    start: function (e) {
                        this.options = e;
                        var t = (0, d.style2Entity)(b, {
                            horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            show: !1
                        });
                        this.totalLable = M.entities.add({
                            label: t,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        }), P.startDraw({
                            type: "polyline",
                            config: {
                                maxPointNum: 2
                            },
                            style: e.style || {
                                lineType: "glow",
                                color: "#ebe12c",
                                width: 9,
                                glowPower: .1
                            }
                        })
                    },
                    showAddPointLength: function (e) { },
                    showRemoveLastPointLength: function (e) {
                        this.totalLable && (this.totalLable.label.show = !1)
                    },
                    showMoveDrawing: function (e) {
                        var t = P.getPositions(e);
                        if (t.length < 2) return void (this.totalLable.label.show = !1);
                        var i = Cesium.Cartographic.fromCartesian(t[0]),
                            a = Cesium.Cartographic.fromCartesian(t[1]),
                            n = Math.abs(a.height - i.height),
                            o = w(n, this.options.unit);
                        this.totalLable.position = Cesium.Cartesian3.midpoint(t[0], t[1], new Cesium.Cartesian3), this.totalLable.label.text = "高度差:" + o, this.totalLable.label.show = !0, this.totalLable.attribute.value = n, this.totalLable.attribute.textEx = "高度差:", this.options.calback && this.options.calback(o, n)
                    },
                    showDrawEnd: function (e) {
                        e._totalLable = this.totalLable, this.totalLable = null
                    }
                },
                k = {
                    options: null,
                    totalLable: null,
                    xLable: null,
                    hLable: null,
                    clearLastNoEnd: function () {
                        null != this.totalLable && M.entities.remove(this.totalLable), null != this.xLable && M.entities.remove(this.xLable), null != this.hLable && M.entities.remove(this.hLable), this.totalLable = null, this.xLable = null, this.hLable = null
                    },
                    start: function (e) {
                        this.options = e;
                        var t = (0, d.style2Entity)(b, {
                            horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            show: !1
                        });
                        this.totalLable = M.entities.add({
                            label: t,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        });
                        var i = (0, d.style2Entity)(b, {
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            show: !1
                        });
                        i.pixelOffset = new Cesium.Cartesian2(0, 0), this.xLable = M.entities.add({
                            label: i,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        }), this.hLable = M.entities.add({
                            label: i,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        }), P.startDraw({
                            type: "polyline",
                            config: {
                                maxPointNum: 2
                            },
                            style: e.style || {
                                lineType: "glow",
                                color: "#ebe12c",
                                width: 9,
                                glowPower: .1
                            }
                        })
                    },
                    showAddPointLength: function (e) {
                        var t = P.getPositions(e);
                        if (4 == t.length) {
                            var i = t[3].clone();
                            t.pop(), t.pop(), t.pop(), t.push(i)
                        }
                        if (2 == t.length) {
                            var a = this.getZHeightPosition(t[0], t[1]);
                            this.getHDistance(t[0], t[1]) > 3 && (t.push(a), t.push(t[0]))
                        }
                        this.showSuperHeight(t)
                    },
                    showRemoveLastPointLength: function (e) {
                        var t = P.getPositions(e.entity);
                        2 == t.length && (t.pop(), t.pop(), this.totalLable.label.show = !1, this.hLable.label.show = !1, this.xLable.label.show = !1)
                    },
                    showMoveDrawing: function (e) {
                        var t = P.getPositions(e);
                        if (4 == t.length) {
                            var i = t[3].clone();
                            t.pop(), t.pop(), t.pop(), t.push(i)
                        }
                        if (2 == t.length) {
                            var a = this.getZHeightPosition(t[0], t[1]);
                            this.getHDistance(t[0], t[1]) > 3 && (t.push(a), t.push(t[0]))
                        }
                        this.showSuperHeight(t)
                    },
                    showDrawEnd: function (e) {
                        e._arrLables = [this.totalLable, this.hLable, this.xLable], this.totalLable = null, this.hLable = null, this.xLable = null
                    },
                    showSuperHeight: function (e) {
                        var t, i, a, n;
                        if (4 == e.length) {
                            var o, s, l = Cesium.Cartesian3.midpoint(e[0], e[1], new Cesium.Cartesian3),
                                u = Cesium.Cartographic.fromCartesian(e[0]),
                                c = Cesium.Cartographic.fromCartesian(e[1]),
                                d = Cesium.Cartographic.fromCartesian(e[2]),
                                h = c.height - d.height;
                            n = c.height - u.height, a = Cesium.Cartesian3.distance(e[0], e[1]), n > -1 && n < 1 ? (s = e[1], this.updateSuperHeightLabel(this.totalLable, s, "高度差:", n), this.updateSuperHeightLabel(this.hLable, l, "", a)) : (h > -.1 && h < .1 ? (o = Cesium.Cartesian3.midpoint(e[2], e[1], new Cesium.Cartesian3), s = Cesium.Cartesian3.midpoint(e[2], e[3], new Cesium.Cartesian3), i = Cesium.Cartesian3.distance(e[1], e[2]), t = Cesium.Cartesian3.distance(e[3], e[2])) : (s = Cesium.Cartesian3.midpoint(e[2], e[1], new Cesium.Cartesian3), o = Cesium.Cartesian3.midpoint(e[2], e[3], new Cesium.Cartesian3), i = Cesium.Cartesian3.distance(e[3], e[2]), t = Cesium.Cartesian3.distance(e[1], e[2])), this.updateSuperHeightLabel(this.totalLable, s, "高度差:", t), this.updateSuperHeightLabel(this.xLable, o, "", i), this.updateSuperHeightLabel(this.hLable, l, "", a))
                        } else if (2 == e.length) {
                            t = Cesium.Cartesian3.distance(e[1], e[0]);
                            var s = Cesium.Cartesian3.midpoint(e[0], e[1], new Cesium.Cartesian3);
                            xLable.label.show && (xLable.label.show = !1, hLable.label.show = !1), this.updateSuperHeightLabel(this.totalLable, s, "高度差:", t)
                        }
                        var f = w(t, this.options.unit);
                        this.options.calback && this.options.calback(f, t)
                    },
                    updateSuperHeightLabel: function (e, t, i, a) {
                        null != e && (e.position = t, e.label.text = i + w(a, this.options.unit), e.label.show = !0, e.attribute.value = a, e.attribute.textEx = i)
                    },
                    getZHeightPosition: function (e, t) {
                        var i = Cesium.Cartographic.fromCartesian(e),
                            a = Number(Cesium.Math.toDegrees(i.longitude)),
                            n = Number(Cesium.Math.toDegrees(i.latitude)),
                            o = Number(i.height.toFixed(2)),
                            s = Cesium.Cartographic.fromCartesian(t),
                            l = Number(Cesium.Math.toDegrees(s.longitude)),
                            u = Number(Cesium.Math.toDegrees(s.latitude)),
                            c = Number(s.height.toFixed(2));
                        return o > c ? Cesium.Cartesian3.fromDegrees(l, u, o) : Cesium.Cartesian3.fromDegrees(a, n, c)
                    },
                    getHDistance: function (e, t) {
                        var i = this.getZHeightPosition(e, t),
                            a = Cesium.Cartographic.fromCartesian(t),
                            n = Cesium.Cartographic.fromCartesian(i),
                            o = Cesium.Cartesian3.distance(e, i);
                        return Math.abs(Number(n.height) - Number(a.height)) < .01 && (o = Cesium.Cartesian3.distance(t, i)), o
                    }
                },
                O = {
                    options: null,
                    totalLable: null,
                    exLine: null,
                    clearLastNoEnd: function () {
                        null != this.totalLable && M.entities.remove(this.totalLable), this.totalLable = null, null != this.exLine && M.entities.remove(this.exLine), this.exLine = null
                    },
                    start: function (e) {
                        this.options = e;
                        var t = (0, d.style2Entity)(b, {
                            horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            show: !1
                        });
                        this.totalLable = M.entities.add({
                            label: t,
                            isMarsMeasureLabel: !0,
                            _noMousePosition: !0,
                            attribute: {
                                unit: this.options.unit,
                                type: this.options.type
                            }
                        }), P.startDraw({
                            type: "polyline",
                            config: {
                                maxPointNum: 2
                            },
                            style: e.style || {
                                lineType: "arrow",
                                color: "#ebe967",
                                width: 9,
                                clampToGround: !0
                            }
                        })
                    },
                    showAddPointLength: function (e) { },
                    showRemoveLastPointLength: function (e) {
                        this.exLine && (this.exLine.polyline.show = !1), this.totalLable && (this.totalLable.label.show = !1)
                    },
                    showMoveDrawing: function (e) {
                        var t = P.getPositions(e);
                        if (t.length < 2) return void (this.totalLable.label.show = !1);
                        var i = Cesium.Cartesian3.distance(t[0], t[1]),
                            a = (0, m.formatPositon)(t[0]),
                            n = (0, m.formatPositon)(t[1]),
                            o = turf.point([a.x, a.y, a.z]),
                            l = turf.point([n.x, n.y, n.z]),
                            u = Math.round(turf.rhumbBearing(o, l)),
                            c = turf.destination(o, i / 3e3, 0, {
                                units: "kilometers"
                            });
                        c = {
                            x: c.geometry.coordinates[0],
                            y: c.geometry.coordinates[1],
                            z: a.z
                        };
                        var d = Cesium.Cartesian3.fromDegrees(c.x, c.y, c.z);
                        this.updateExLine([t[0], d]), this.totalLable.position = t[1], this.totalLable.label.text = "角度:" + u + "°\n距离:" + w(i), this.totalLable.label.show = !0, this.totalLable.attribute.value = u, this.totalLable.attribute.textEx = "角度:", this.options.calback && this.options.calback(u + "°", u)
                    },
                    updateExLine: function (e) {
                        this.exLine ? (this.exLine.polyline.show = !0, this.exLine.polyline.positions.setValue(e)) : this.exLine = M.entities.add({
                            polyline: {
                                positions: e,
                                width: 3,
                                clampToGround: !0,
                                material: new Cesium.PolylineDashMaterialProperty({
                                    color: Cesium.Color.RED
                                })
                            }
                        })
                    },
                    showDrawEnd: function (e) {
                        e._totalLable = this.totalLable, this.totalLable = null, this.exLine = null
                    }
                };
            return {
                measuerLength: t,
                measureHeight: o,
                measureArea: a,
                measureAngle: u,
                measureVolume: n,
                measureSection: i,
                updateUnit: v,
                clearMeasure: g,
                formatArea: y,
                formatLength: w
            }
        };
    Cesium.Measure = g
})()